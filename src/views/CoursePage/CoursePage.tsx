import { useEffect, useState, useRef, useContext } from 'react';
import { useParams } from 'react-router-dom';
import LessonsList from 'components/LessonsList';
import Loader from 'components/Loader';
import Error from 'components/Error';
import site_unavailable from 'images/site_unavailable.jpg';
import video_unavailable from 'images/video_unavailable.png';
import { IDLE, PENDING, RESOLVED, REJECTED, HLS_IS_SUPPORTED } from 'helpers/constants';
import { handleElementFormat } from 'helpers/formatHelper';
import { handleScrollToTop } from 'helpers/scrollHelper';
import { getCourseByID } from 'services/api';
import { TokenContext } from 'context/TokenContextProvider';
import { ICoursesItem } from 'interfaces/CoursesItem.interface';
import { colors } from 'utils/colors';
import {
  TitleStyles,
  ImageContainerStyles,
  TextStyles,
  SkillsListStyles,
  SkillItemStyles,
} from 'views/CoursePage/CoursePage.styled';

const CoursePage = () => {
  const { token } = useContext(TokenContext);
  const [status, setStatus] = useState(IDLE);
  const [course, setCourse] = useState<ICoursesItem>();
  const [error, setError] = useState(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { id } = useParams();
  const firstLesson = course?.lessons![0];
  const firstLessonLink = firstLesson?.link;
  const firstLessonDuration = firstLesson?.duration;
  const { main } = colors;

  useEffect(() => {
    setStatus(PENDING);

    if (id && token) {
      getCourseByID(id, token).then(response => {
        if (response.message) {
          setStatus(REJECTED);
          setError(response.message);
        } else {
          setStatus(RESOLVED);
          setCourse(response);
        }
      });

      handleScrollToTop();
    }
  }, [id, token]);

  useEffect(() => {
    if (HLS_IS_SUPPORTED && firstLessonLink) {
      const video = videoRef.current as HTMLMediaElement;

      if (video) {
        handleElementFormat(video, firstLessonLink);
      }
    }
  }, [firstLessonLink]);

  if (status === PENDING)
    return (
      <Loader
        ariaLabel={'ThreeDots'}
        height={100}
        width={100}
        radius={5}
        color={main}
      />
    );

  if (status === REJECTED)
    return <Error error={error} image={site_unavailable} />;

  if (status === RESOLVED)
    return (
      <>
        <TitleStyles>Course: {course?.title}</TitleStyles>
        <ImageContainerStyles>
          {firstLessonLink && firstLessonDuration ? (
            <video ref={videoRef} width='100%' height='100%' controls />
          ) : (
            <img src={video_unavailable} alt='video unavailable' />
          )}
        </ImageContainerStyles>
        <TextStyles>Description: {course?.description}</TextStyles>
        <SkillsListStyles>
          {course?.meta?.skills?.map(skill => (
            <SkillItemStyles key={skill}>#{skill}</SkillItemStyles>
          ))}
        </SkillsListStyles>
        <LessonsList lessons={course?.lessons} />
      </>
    );

  return <></>;
};

export default CoursePage;
