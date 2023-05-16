import { useContext, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LessonContext } from 'context/LessonContextProvider';
import {
  ILessonItem,
  ILessonsItemComponentProps,
} from 'interfaces/LessonsItem.interface';
import {
  ListStyles,
  ListItemStyles,
  LinkItemStyles,
} from 'components/LessonsList/LessonList.styled';

const LessonsList = ({ lessons }: ILessonsItemComponentProps) => {
  const { setLesson } = useContext(LessonContext);
  const sortedLessons = useMemo(
    () => [...lessons].sort((a, b) => a.order - b.order),
    [lessons],
  );

  const handleNotification = ({ order, title }: ILessonItem) =>
    toast(`The video for the lesson ${order} "${title}" is locked!`);

  const handleVideoPlayback = (
    e: React.SyntheticEvent,
    lesson: ILessonItem,
  ) => {
    e.preventDefault();

    if (lesson?.status === 'locked') {
      handleNotification(lesson);
    } else {
      setLesson(lesson);
    }
  };

  return (
    <>
      <ListStyles>
        {sortedLessons?.map(lesson => (
          <ListItemStyles
            key={lesson.id}
            theme
            onClick={e => handleVideoPlayback(e, lesson)}
          >
            <LinkItemStyles to={'lesson'}>
              <b>Lesson {lesson.order}.</b>
              <br />
              {lesson.title}
            </LinkItemStyles>
          </ListItemStyles>
        ))}
      </ListStyles>
      <Outlet />
    </>
  );
};

export default LessonsList;
