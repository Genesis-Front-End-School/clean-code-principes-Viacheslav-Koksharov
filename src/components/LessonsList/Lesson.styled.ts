import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../../utils/colors';
import { secondary } from '../../utils/breakpoints';

const { desktop } = secondary;

const ListS = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto 20px;

  @media screen and (min-width: ${desktop}px) {
    justify-content: flex-start;
  }
`;

const ListItemS = styled.li`
  width: calc((100% - 20px) / 2);
  margin: 0 0 10px 0;
  padding: 10px;
  text-align: center;
  font-size: 12px;
  color: ${colors.decor};
  border: 2px solid ${colors.accent};
  border-radius: 5px;

  :hover {
    background-color: ${colors.accent};
    transform: scale(1.005);
  }

  @media screen and (min-width: ${desktop}px) {
    width: calc((100% - 40px) / 5);
    margin: 0 10px 10px 0;

    &:nth-child(5n) {
      margin: 0 0 10px 0;
    }
  }
`;

const LinkItemS = styled(Link)`
  display: block;
`;

export { ListS, ListItemS, LinkItemS };
