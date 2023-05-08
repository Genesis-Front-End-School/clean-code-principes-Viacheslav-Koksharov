import { ILessonItem } from 'interfaces/LessonsItem.interface'

interface ICourseItem {
  id: string;
  title: string;
  tags?: String[];
  launchDate: string;
  lessons: ILessonItem[];
  status: string;
  description: string;
  duration: string;
  lessonsCount: number;
  containsLockedLessons: boolean;
  previewImageLink: string;
  rating: number;
  meta: {
    slug: string;
    skills: string[];
    courseVideoPreview: {
      link: string;
      duration: number;
      previewImageLink: string;
    };
  };
}

interface ICourseProps {
  course: ICourseItem;
}

interface ICoursesListProps {
  courses: ICourseItem[];
  currentRef: React.RefObject<HTMLUListElement> | null;
}

export type { ICourseItem, ICourseProps, ICoursesListProps };
