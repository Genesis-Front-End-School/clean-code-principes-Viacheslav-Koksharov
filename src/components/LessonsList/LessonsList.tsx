import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LessonContext } from 'context/LessonContextProvider';
import {
  ListStyles,
  ListItemStyles,
  LinkItemStyles,
} from 'components/LessonsList/Lesson.styled';

const LessonsList = ({ oneCourse }) => {
  const { setLesson } = useContext(LessonContext);
  const { lessons } = oneCourse;

  const handleNotification = ({ order, title }) =>
    toast(`The video for the lesson ${order} "${title}" is locked!`);

  const showVideo = (e, lesson) => {
    if (lesson?.status === 'locked') {
      setLesson(null);
      handleNotification(lesson);
    } else {
      e.preventDefault();
      setLesson(lesson);
    }
  };

  return (
    <>
      <ListStyles>
        {lessons?.map(lesson => {
          return (
            <ListItemStyles key={lesson.id} onClick={e => showVideo(e, lesson)}>
              <LinkItemStyles to={`lesson`}>
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
