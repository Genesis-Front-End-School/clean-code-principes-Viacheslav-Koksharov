import { useEffect, useRef, useContext } from 'react';
import LessonsList from 'components/LessonsList';
import Loader from 'components/Loader';
import Error from 'components/Error';
import site_unavailable from 'images/site_unavailable.jpg';
import video_unavailable from 'images/video_unavailable.png';
import useFetch from 'hooks/useFetch';
import { HLS_IS_SUPPORTED, COURSES_URL } from 'helpers/constants';
import { handleElementFormat } from 'helpers/formatHelper';
import { TokenContext } from 'context/TokenContextProvider';
import { LessonProvider } from 'context/LessonContextProvider';
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
  const { response, isLoading, error } = useFetch(COURSES_URL, token);
  const videoRef = useRef<HTMLVideoElement>(null);
  const firstLesson = response?.lessons![0];
  const firstLessonLink = firstLesson?.link;
  const firstLessonDuration = firstLesson?.duration;
  const { main } = colors;

  useEffect(() => {
    if (HLS_IS_SUPPORTED && firstLessonLink) {
      const video = videoRef.current;

      if (video) {
        handleElementFormat(video, firstLessonLink);
      }
    }
  }, [firstLessonLink]);

  return (
    <>
      {isLoading && (
        <Loader
          ariaLabel={'ThreeDots'}
          height={100}
          width={100}
          radius={5}
          color={main}
        />
      )}

      {response && (
        <LessonProvider>
          <TitleStyles>Course: {response?.title}</TitleStyles>
          <ImageContainerStyles>
            {firstLessonLink && firstLessonDuration ? (
              <video ref={videoRef} width='100%' height='100%' controls />
            ) : (
              <img src={video_unavailable} alt='video unavailable' />
            )}
          </ImageContainerStyles>
          <TextStyles>Description: {response?.description}</TextStyles>
          <SkillsListStyles>
            {response?.meta?.skills?.map(skill => (
              <SkillItemStyles key={skill}>#{skill}</SkillItemStyles>
            ))}
          </SkillsListStyles>
          <LessonsList lessons={response?.lessons} />
        </LessonProvider>
      )}

      {error && <Error error={error} image={site_unavailable} />}
    </>
  );
};

export default CoursePage;
