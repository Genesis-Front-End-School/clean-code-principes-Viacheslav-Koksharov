import styled from 'styled-components';
import { secondary } from 'utils/breakpoints';
import { colors } from 'utils/colors';

const { desktop } = secondary;
const { accent } = colors;

interface Props {
  route?: boolean;
}

const ContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  @media screen and (min-width: ${desktop}px) {
    justify-content: center;
  }
`;

const ImageContainerStyles = styled.div`
  max-width: ${(props: Props) => (props.route ? '100%' : '400px')};
  margin: 50px auto;

  @media screen and (min-width: ${desktop}px) {
    margin: 0 auto 50px;
  }
`;

const TitleStyles = styled.h1`
  text-align: center;
  font-size: 18px;
  color: ${accent};

  @media screen and (min-width: ${desktop}px) {
    font-size: 24px;
  }
`;

export { ContainerStyles, ImageContainerStyles, TitleStyles };
