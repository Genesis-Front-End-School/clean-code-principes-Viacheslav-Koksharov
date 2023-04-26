import styled from 'styled-components';
import { colors } from 'utils/colors';

const { main } = colors;

const ImageContainerStyles = styled.div`
  width: 100%;
  height: 550px;
  margin-bottom: 20px;
`;

const TitleStyles = styled.h3`
  margin: 0 0 20px;
  text-align: center;
  font-size: 30px;
`;

const TextStyles = styled.p`
  margin: 0 0 15px 0;
  text-align: center;
  color: ${main};
  font-size: 18px;
  font-weight: 600;
`;

export { ImageContainerStyles, TitleStyles, TextStyles };
