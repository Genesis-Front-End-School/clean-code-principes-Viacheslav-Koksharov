import { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import CoursesItem from 'components/CoursesItem';
import usePagination from 'hooks/usePagination';
import {
  ListStyles,
  PaginationStyles,
} from 'components/CoursesList/CoursesList.styled';

const CoursesList = ({ currentCourses }) => {
  const [page, setPage] = useState(1);
  const { courses } = currentCourses;
  const PER_PAGE = 10;
  const count = Math.ceil(courses.length / PER_PAGE);
  const pagination = usePagination(courses, PER_PAGE);

  useEffect(() => {
    pagination.jumpToPage(page);
    scrollToTop();
  }, [page, pagination]);

  const handleChange = (e, pageNumber) => {
    setPage(pageNumber);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <ListStyles>
        {pagination.getItemsToPage().map(course => (
          <CoursesItem key={course.id} course={course}></CoursesItem>
        ))}
      </ListStyles>
      <Stack spacing={2}>
        <PaginationStyles
          count={count}
          size='large'
          page={page}
          variant='outlined'
          shape='rounded'
          onChange={handleChange}
        />
      </Stack>
    </>
  );
};

export default CoursesList;
