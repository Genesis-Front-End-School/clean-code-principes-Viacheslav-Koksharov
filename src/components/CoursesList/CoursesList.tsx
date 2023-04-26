import { useEffect, useState } from 'react';
import CoursesItem from '../CoursesItem';
import { ListStyled, PaginationStyled } from './CoursesList.styled';
import Stack from '@mui/material/Stack';
import usePagination from '../../hooks/usePagination';

const CoursesList = ({ currentCourses }) => {
  const { courses } = currentCourses;
  const [page, setPage] = useState(1);
  const PER_PAGE = 10;
  const count = Math.ceil(courses.length / PER_PAGE);
  const pagination = usePagination(courses, PER_PAGE);

  useEffect(() => {
    pagination.jump(page);
    scrollToTop();
  }, [page, pagination]);

  const handleChange = (e, p) => {
    setPage(p);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <ListStyled>
        {pagination.currentData().map(course => (
          <CoursesItem key={course.id} course={course}></CoursesItem>
        ))}
      </ListStyled>
      <Stack spacing={2}>
        <PaginationStyled
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </Stack>
    </>
  );
};

export default CoursesList;
