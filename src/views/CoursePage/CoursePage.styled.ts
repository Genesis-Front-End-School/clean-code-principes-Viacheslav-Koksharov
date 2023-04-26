import styled from 'styled-components';
import { colors } from 'utils/colors';

const { main, accent } = colors;

const TitleStyles = styled.h1`
  margin: 0 0 20px;
  text-align: center;
  font-size: 30px;
`;

const ImageContainerStyles = styled.div`
  width: 60%;
  height: 60%;
  margin: 0 auto 20px;
`;

const TextStyles = styled.p`
  margin: 0 0 20px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: ${accent};
`;

const SkillsListStyles = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto 20px;
`;

const SkillItemStyles = styled.li`
  margin: 0 10px 0 0;
  text-align: center;
  font-size: 16px;
  color: ${main};
`;

export {
  TitleStyles,
  ImageContainerStyles,
  TextStyles,
  SkillsListStyles,
  SkillItemStyles,
};
