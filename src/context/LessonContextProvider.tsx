import { useState, createContext } from 'react';
import { ILessonItem } from 'interfaces/LessonsItem.interface';
import {
  ILessonContext,
  ILessonContextProps,
} from 'interfaces/LessonContext.interface';

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
