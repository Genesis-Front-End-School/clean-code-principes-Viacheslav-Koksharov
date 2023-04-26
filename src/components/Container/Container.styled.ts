import styled from 'styled-components';
import { primary } from '../../utils/breakpoints';

const { desktop } = primary;

const ContainerS = styled.div`
  position: relative;
  width: 100%;
  margin: 0px auto;
  padding: 30px 20px 0;

  @media screen and (min-width: ${desktop}px) {
    width: ${desktop}px;
  }
`;

export { ContainerS };
