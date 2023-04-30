import { useContext, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LessonContext } from 'context/LessonContextProvider';
import {
  ListStyles,
  ListItemStyles,
  LinkItemStyles,
} from 'components/LessonsList/Lesson.styled';

const LessonsList = ({ lessons }) => {
  const { setLesson } = useContext(LessonContext);
  const sortedLessons = useMemo(
    () => [...lessons].sort((a, b) => a.order - b.order),
    [lessons],
  );

  const handleNotification = ({ order, title }) =>
    toast(`The video for the lesson ${order} "${title}" is locked!`);

  const handleVideoPlayback = (e, lesson) => {
    e.preventDefault();

    if (lesson?.status === 'locked') {
      setLesson(null);
      handleNotification(lesson);
    } else {
      setLesson(lesson);
    }
  };

  return (
    <>
      <ListStyles>
        {sortedLessons?.map(lesson => {
          return (
            <ListItemStyles
              key={lesson.id}
              onClick={e => handleVideoPlayback(e, lesson)}
            >
              <LinkItemStyles to={'lesson'}>
                <b>Lesson {lesson.order}.</b>
                <br />
                {lesson.title}
              </LinkItemStyles>
            </ListItemStyles>
          );
        })}
      </ListStyles>
      <Outlet />
    </>
  );
};

export default LessonsList;
