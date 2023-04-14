import styled from 'styled-components';
import { colors } from '../../utils/colors';

const TitleS = styled.h1`
  margin: 0 0 20px;
  text-align: center;
  font-size: 30px;
`;

const ImageContainerS = styled.div`
  width: 60%;
  height: 60%;
  margin: 0 auto 20px;
`;

const TextS = styled.p`
  margin: 0 0 20px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: ${colors.accent};
`;

const SkillsListS = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto 20px;
`;

const SkillItem = styled.li`
  margin: 0 10px 0 0;
  text-align: center;
  font-size: 16px;
  color: ${colors.main};
`;

export { TitleS, ImageContainerS, TextS, SkillsListS, SkillItem };
