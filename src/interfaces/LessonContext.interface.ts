import { ILessonItem } from 'interfaces/LessonsItem.interface';

interface ILessonContext {
  lesson: ILessonItem | undefined;
  setLesson: (lesson: ILessonItem | undefined) => void;
}

interface ILessonContextProps {
  children?: React.ReactNode;
}

export type { ILessonContext, ILessonContextProps };
