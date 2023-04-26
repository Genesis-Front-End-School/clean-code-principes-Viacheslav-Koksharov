import { useState, createContext } from 'react';
import { ILessonItem } from '../interfaces/CoursesItem.interfaces';
import {
  ILessonContext,
  ILessonContextProps,
} from '../interfaces/LessonContext.interfaces';

const LessonContext = createContext<ILessonContext>({
  lesson: undefined,
  setLesson: () => {},
});

const LessonProvider = ({ children }: ILessonContextProps) => {
  const [lesson, setLesson] = useState<ILessonItem>();

  const sampleCourseContext: ILessonContext = {
    lesson,
    setLesson,
  };

  return (
    <LessonContext.Provider value={sampleCourseContext}>
      {children}
    </LessonContext.Provider>
  );
};

export { LessonContext, LessonProvider };
