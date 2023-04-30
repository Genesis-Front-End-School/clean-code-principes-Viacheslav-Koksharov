import styled from 'styled-components';
import { secondary } from 'utils/breakpoints';

const { desktop } = secondary;

const ContainerStyles = styled.div`
  position: relative;
  height: 100vh;
`;

const SpinnerStyles = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -20%);

  @media screen and (min-width: ${desktop}px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export { ContainerStyles, SpinnerStyles };
