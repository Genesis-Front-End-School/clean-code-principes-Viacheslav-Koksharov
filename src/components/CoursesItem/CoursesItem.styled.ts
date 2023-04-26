import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from 'utils/colors';
import { secondary } from 'utils/breakpoints';

const { decor, accent } = colors;
const { desktop } = secondary;

interface Props {
  accent?: boolean;
}

const ListItemStyles = styled.li`
  margin: 0 0 20px 0;
  padding: 20px;
  border: 2px solid ${decor};
  border-radius: 5px;

  @media screen and (min-width: ${desktop}px) {
    width: calc((100% - 50px) / 2);
    padding: 40px 20px;
  }
`;

const LinkItemStyles = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const ImageContainerStyles = styled.div`
  width: 90%;
  height: 250px;
  margin-bottom: 20px;
`;

const TitleStyles = styled.h2`
  align-self: center;
  width: 90%;
  height: 50px;
  margin: 0 0 15px 0;
  text-align: center;
  color: ${accent};
  font-size: 20px;
`;

const TextStyles = styled.p`
  position: ${(props: Props) => (props.accent ? 'absolute' : 'static')};
  bottom: 0;
  align-self: ${(props: Props) => (props.accent ? 'flex-end' : 'center')};
  margin: ${(props: Props) => (props.accent ? '0' : '0 0 15px 0')};
  font-size: 18px;
  font-weight: 600;
`;

const SkillsTitleStyles = styled.h3`
  margin: 0 0 15px 0;
  align-self: flex-start;
  font-size: 18px;
`;

const SkillsListStyles = styled.ol`
  align-self: flex-start;
  padding-inline-start: 20px;
`;

const SkillsItemStyles = styled.li`
  margin: 0 15px 15px 0;
  font-size: 16px;
`;

export {
  ListItemStyles,
  LinkItemStyles,
  ImageContainerStyles,
  TitleStyles,
  TextStyles,
  SkillsTitleStyles,
  SkillsListStyles,
  SkillsItemStyles,
};
