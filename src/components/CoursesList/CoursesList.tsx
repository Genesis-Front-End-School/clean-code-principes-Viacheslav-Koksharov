import { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import CoursesItem from 'components/CoursesItem';
import { handleScrollToTop } from 'helpers/scrollHelper';
import usePagination from 'hooks/usePagination';
import {
  ListStyles,
  PaginationStyles,
} from 'components/CoursesList/CoursesList.styled';

const CoursesList = ({ allCourses }) => {
  const [page, setPage] = useState(1);
  const { courses } = allCourses;
  const PER_PAGE = 10;
  const COUNT = Math.ceil(courses.length / PER_PAGE);
  const pagination = usePagination(courses, PER_PAGE);

  useEffect(() => {
    pagination.jumpToPage(page);
    handleScrollToTop();
  }, [page, pagination]);

  const handlePageChange = (e, pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <>
      <ListStyles>
        {pagination.getItemsToPage().map(course => (
          <CoursesItem key={course.id} course={course} />
        ))}
      </ListStyles>
      <Stack spacing={2}>
        <PaginationStyles
          count={COUNT}
          size='large'
          page={page}
          variant='outlined'
          shape='rounded'
          onChange={handlePageChange}
        />
      </Stack>
    </>
  );
};

export default CoursesList;
