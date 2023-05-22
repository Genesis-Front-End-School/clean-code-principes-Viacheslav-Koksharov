import { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import CoursesItem from 'components/CoursesItem';
import { handleScrollToTop } from 'helpers/scrollHelper';
import usePagination from 'hooks/usePagination';
import { ICoursesListProps } from 'interfaces/CoursesItem.interface';
import {
  ListStyles,
  PaginationStyles,
} from 'components/CoursesList/CoursesList.styled';

const CoursesList = ({ courses, currentRef }: ICoursesListProps) => {
  const [page, setPage] = useState(1);
  const PER_PAGE = 10;
  const count = Math.ceil(courses.length / PER_PAGE);
  const pagination = usePagination(courses, PER_PAGE);

  useEffect(() => {
    pagination.jumpToPage(page);
    handleScrollToTop();
  }, [page, pagination]);

  const handlePageChange = (
    _: React.ChangeEvent<unknown>,
    pageNumber: number,
  ) => {
    setPage(pageNumber);
  };

  return (
    <>
      <ListStyles ref={currentRef}>
        {pagination.getItemsToPage().map(course => (
          <CoursesItem key={course.id} course={course} />
        ))}
      </ListStyles>
      <Stack spacing={2}>
        {page && (
          <PaginationStyles
            count={count}
            size='large'
            page={page}
            color='primary'
            variant='outlined'
            shape='rounded'
            onChange={handlePageChange}
          />
        )}
      </Stack>
    </>
  );
};

export default CoursesList;
