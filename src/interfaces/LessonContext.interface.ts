import { ILessonItem } from './CoursesItem.interface';

interface ILessonContext {
  lesson: ILessonItem | undefined;
  setLesson: (oneCourse) => void;
}

interface ILessonContextProps {
  children?: React.ReactNode;
}

export type { ILessonContext, ILessonContextProps };
