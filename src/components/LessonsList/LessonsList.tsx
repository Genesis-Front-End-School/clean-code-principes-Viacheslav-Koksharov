import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ListS, ListItemS, LinkItemS } from './Lesson.styled';
import { LessonContext } from '../../context/LessonContextProvider';

const LessonsList = ({ oneCourse }) => {
  const { setLesson } = useContext(LessonContext);
  const { lessons } = oneCourse;

  const showVideo = (e, lesson) => {
    if (lesson?.status === 'locked') {
      setLesson(null);
      alert('This video is locked');
    } else {
      e.preventDefault();
      setLesson(lesson);
    }
  };

  return (
    <>
      <ListS>
        {lessons?.map(lesson => {
          return (
            <ListItemS key={lesson.order} onClick={e => showVideo(e, lesson)}>
              <LinkItemS to={`lesson`}>
                <b>Lesson {lesson.order}.</b>
                <br />
                {lesson.title}
              </LinkItemS>
            </ListItemS>
          );
        })}
      </ListS>
      <Outlet />
    </>
  );
};

export default LessonsList;
