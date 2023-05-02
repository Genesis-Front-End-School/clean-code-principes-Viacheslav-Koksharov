import { IErrorProps } from 'interfaces/Error.interface';
import {
  ContainerStyles,
  ImageContainerStyles,
  TitleStyles,
} from 'components/Error/Error.styled';

const Error = ({ error, image, route }: IErrorProps) => (
  <ContainerStyles>
    <ImageContainerStyles route={route}>
      <img src={image} alt='the site is unavailable'></img>
    </ImageContainerStyles>
    {error && <TitleStyles>{error}</TitleStyles>}
  </ContainerStyles>
);

export default Error;
