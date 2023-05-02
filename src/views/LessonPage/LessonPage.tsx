import { useEffect, useContext, useState, useRef } from 'react';
import ScrollTopButton from 'components/ScrollTopButton';
import video_unavailable from 'images/video_unavailable.png';
import { handleElementFormat } from 'helpers/formatHelper';
import { handleScrollToElement } from 'helpers/scrollHelper';
import { HLS_IS_SUPPORTED } from 'helpers/constants';
import { LessonContext } from 'context/LessonContextProvider';
import {
  TitleStyles,
  TextStyles,
  ImageContainerStyles,
} from 'views/LessonPage/LessonPage.styled';

const LessonPage = () => {
  const { lesson } = useContext(LessonContext);
  const [lessonLink, setLessonLink] = useState<string | undefined>(undefined);
  const [lessonDuration, setLessonDuration] = useState<number | undefined>(
    undefined,
  );
  const [video, setVideo] = useState<HTMLMediaElement>();
  const [currentTime, setCurrentTime] = useState(
    () => JSON.parse(window.localStorage.getItem('time')!) ?? [],
  );
  const [isPlay, setIsPlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (lesson) {
      setLessonLink(lesson?.link);
      setLessonDuration(lesson?.duration);
    }
  }, [lesson]);

  useEffect(() => {
    const title = titleRef.current;

    if (title) {
      handleScrollToElement(title);
    }

    if (HLS_IS_SUPPORTED && lessonLink) {
      const video = videoRef.current;

      if (video) {
        setVideo(video);
        handleElementFormat(video, lessonLink);
      }
    }
  }, [lessonLink]);

  useEffect(() => {
    if (currentTime.length > 0 && !isPlay) {
      window.localStorage.setItem('time', JSON.stringify(currentTime));
    }
  }, [currentTime, isPlay]);

  const handleVideoTimeUpdate = () => {
    if (video) {
      if (video.paused) {
        video.addEventListener('play', () => {
          const currentEl = currentTime.find(({ id }) => id === video.id);

          if (currentEl) {
            video.currentTime = currentEl.time;
          }
        });

        setIsPlay(true);
        return;
      }

      const currentEl = currentTime.find(({ id }) => id === video.id);

      if (!currentEl) {
        setCurrentTime([
          ...currentTime,
          { id: video.id, time: video.currentTime },
        ]);
      } else {
        currentTime.forEach(({ id, time }) => {
          if (id === video.id && video.currentTime > 0) {
            return (time = video.currentTime);
          }
        });
      }
      setIsPlay(false);
    }
  };

  return (
    <>
      {lesson && (
        <>
          <TitleStyles ref={titleRef}>Lesson {lesson?.order}</TitleStyles>
          <TextStyles>{lesson?.title}</TextStyles>
          <ImageContainerStyles onTimeUpdate={handleVideoTimeUpdate}>
            {lessonLink && lessonDuration ? (
              <video ref={videoRef} width='100%' height='100%' controls />
            ) : (
              <img src={video_unavailable} alt='banner' />
            )}
          </ImageContainerStyles>
          <ScrollTopButton />
        </>
      )}
    </>
  );
};

export default LessonPage;
