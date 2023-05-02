import { useState } from 'react';
import { ICourseItem } from 'interfaces/CoursesItem.interface';

const usePagination = (items: ICourseItem[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(items.length / itemsPerPage);

  const getItemsToPage = () => {
    const firstItem = (currentPage - 1) * itemsPerPage;
    const lastItem = firstItem + itemsPerPage;
    return items.slice(firstItem, lastItem);
  };

  const getNextPage = () =>
    setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage));

  const getPrevPage = () =>
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1));

  const jumpToPage = (page: number) => {
    const pageNumber = Math.max(1, page);
    setCurrentPage(Math.min(pageNumber, maxPage));
  };

  return {
    getNextPage,
    getPrevPage,
    jumpToPage,
    getItemsToPage,
  };
};

export default usePagination;
