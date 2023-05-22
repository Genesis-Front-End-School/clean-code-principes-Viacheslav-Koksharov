import styled from 'styled-components';
import { colors } from 'utils/colors';
import { secondary } from 'utils/breakpoints';

const { accent } = colors;
const { desktop } = secondary;

const ButtonStyles = styled.div`
  position: fixed;
  bottom: 50px;
  right: 30px;
  display: flex;
  color: ${accent};
  font-size: 3rem;
  cursor: pointer;
  z-index: 1;

  @media screen and (min-width: ${desktop}px) {
    right: 30px;
  }
`;

export { ButtonStyles };
