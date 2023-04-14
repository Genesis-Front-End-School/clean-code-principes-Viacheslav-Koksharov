import styled from 'styled-components';
import { secondary } from '../../utils/breakpoints';
import { colors } from '../../utils/colors';

const ButtonS = styled.div`
  position: fixed;
  right: 30px;
  bottom: 50px;
  color: ${colors.accent};
  font-size: 3rem;
  cursor: pointer;
  z-index: 1;

  @media screen and (min-width: ${secondary.desktop}px) {
    right: 50px;
  }
`;

export { ButtonS };
