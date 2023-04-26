import styled from 'styled-components';
import Pagination from '@mui/material/Pagination';
import { secondary } from 'utils/breakpoints';

const { desktop } = secondary;

const ListStyles = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
  margin: 0 auto;

  @media screen and (min-width: ${desktop}px) {
    max-width: 100%;
    justify-content: space-between;
  }
`;

const PaginationStyles = styled(Pagination)`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 30px 0;
  }
`;
export { ListStyles, PaginationStyles };
