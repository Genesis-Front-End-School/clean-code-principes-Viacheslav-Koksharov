import { useContext } from 'react';
import { render, screen } from '@testing-library/react';
import { LessonContext, LessonProvider } from 'context/LessonContextProvider';
import { ILessonItem } from 'interfaces/LessonsItem.interface';

describe('<LessonProvider />', () => {
  const mockLesson: ILessonItem = {
    id: '278e5a0e-8df1-4646-9984-10289d52dc2d',
    duration: 255,
    link: 'https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/lesson-1/AppleHLS1/lesson-1.m3u8',
    order: 1,
    meta: null,
    previewImageLink:
      'https://wisey.app/assets/images/web/lessons-covers/lack-of-motivation-how-to-overcome-it/lesson-1',
    status: 'unlocked',
    title: 'Why we lack motivation',
    type: 'video',
  };

  const ComponentSetLesson = () => {
    const { setLesson } = useContext(LessonContext);
    setLesson(mockLesson);
    return <></>;
  };

  const ComponentUseLesson = () => {
    const { lesson } = useContext(LessonContext);
    return (
      <div>
        <h3>Lesson {lesson?.order}</h3>
        <p data-testid='LessonTitle'>{lesson?.title}</p>
        <div>
          <video
            data-testid='LessonVideo'
            src={lesson?.link}
          />
        </div>
      </div>
    );
  };

  test('should provide expected context to the child elements', () => {
    render(
      <LessonProvider>
        <ComponentSetLesson />
        <ComponentUseLesson />
      </LessonProvider>,
    );
    const lessonTitle = screen.getByTestId('LessonTitle');
    const lessonVideo = screen.getByTestId('LessonVideo');
    expect(lessonTitle.textContent).toEqual(mockLesson.title);
    expect(lessonVideo.getAttribute('src')).toEqual(mockLesson.link);
  });
});
