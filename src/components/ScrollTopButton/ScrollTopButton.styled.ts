import styled from 'styled-components';
import { colors } from 'utils/colors';
import { secondary } from 'utils/breakpoints';

const { accent } = colors;
const { desktop } = secondary;

const ButtonStyles = styled.div`
  position: fixed;
  right: 30px;
  bottom: 50px;
  color: ${accent};
  font-size: 3rem;
  cursor: pointer;
  z-index: 1;

  @media screen and (min-width: ${desktop}px) {
    right: 50px;
  }
`;

export { ButtonStyles };
