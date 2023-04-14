interface ILessonItem {
  id?: string;
  duration?: number;
  link?: string;
  order?: number;
  meta?: null;
  previewImageLink?: string;
  status?: string;
  title?: string;
  type?: string;
}
interface ILessonsItemComponentProps {
  lesson: ILessonItem;
}
export type { ILessonsItemComponentProps, ILessonItem };
