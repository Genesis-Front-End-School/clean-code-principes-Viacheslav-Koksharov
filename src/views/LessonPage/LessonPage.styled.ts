import styled from 'styled-components';
import { colors } from '../../utils/colors';

const ImageContainerS = styled.div`
  width: 100%;
  height: 550px;
  margin-bottom: 20px;
`;

const TitleS = styled.h3`
  margin: 0 0 20px;
  text-align: center;
  font-size: 30px;
`;

const TextS = styled.p`
  margin: 0 0 15px 0;
  text-align: center;
  color: ${colors.main};
  font-size: 18px;
  font-weight: 600;
`;

export { TitleS, TextS, ImageContainerS };
