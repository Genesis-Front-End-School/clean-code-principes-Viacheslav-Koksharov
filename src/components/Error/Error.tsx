import { ContainerS, ImageContainerS, TitleS } from './Error.styled';

const Error = ({ error = null, image = '', route = false }) => {
  return (
    <ContainerS>
      <ImageContainerS route>
        <img src={image} alt="the site is unavailable"></img>
      </ImageContainerS>
      {error && <TitleS>{error}</TitleS>}
    </ContainerS>
  );
};

export default Error;
