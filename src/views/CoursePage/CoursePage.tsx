import Hls from 'hls.js';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCourseByID } from '../../services/api';
import { colors } from '../../utils/colors';
import site_unavailable from '../../images/site_unavailable.jpg';
import video_unavailable from '../../images/video_unavailable.png';
import LessonsList from '../../components/LessonsList';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import { ICoursesItem } from '../../interfaces/CoursesItem.interfaces';
import {
  TitleS,
  ImageContainerS,
  TextS,
  SkillsListS,
  SkillItem,
} from './CoursePage.styled';

const CoursePage = () => {
  const [course, setCourse] = useState<ICoursesItem>();
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function getCurrentCourseByID() {
      const response = await getCourseByID(id);

      if (response.message) {
        setError(response.message);
      } else {
        setCourse(response);
      }
    }

    getCurrentCourseByID();
    scrollToTop();
  }, [id]);

  let firstLesson = course?.lessons![0];
  useEffect(() => {
    if (window.Hls.isSupported() && firstLesson?.link) {
      const video = document.getElementById('video') as HTMLMediaElement;
      let hls = new Hls();
      hls.loadSource(firstLesson?.link);
      hls.attachMedia(video);
    }
  }, [course?.lessons, firstLesson?.link]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {error ? (
        <Error error={error} image={site_unavailable} />
      ) : (
        <>
          {course ? (
            <>
              <TitleS>Course: {course?.title}</TitleS>
              <ImageContainerS>
                {firstLesson?.link && firstLesson?.duration ? (
                  <video id="video" width="100%" height="100%" controls></video>
                ) : (
                  <img src={video_unavailable} alt="banner" />
                )}
              </ImageContainerS>
              <TextS>Description: {course?.description}</TextS>
              <SkillsListS>
                {course?.meta?.skills?.map(skill => (
                  <SkillItem key={skill}>#{skill}</SkillItem>
                ))}
              </SkillsListS>
              <LessonsList oneCourse={course} />
            </>
          ) : (
            <Loader
              ariaLabel={'ThreeDots'}
              height={100}
              width={100}
              radius={5}
              color={colors.main}
            />
          )}
        </>
      )}
    </>
  );
};

export default CoursePage;
