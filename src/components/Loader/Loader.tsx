import { BallTriangle } from 'react-loader-spinner';
import { ILoader } from 'interfaces/Loader.interface';
import {
  ContainerStyles,
  SpinnerStyles,
} from 'components/Loader/Loader.styled';

const Loader = ({ ariaLabel, height, width, radius, color }: ILoader) => (
  <ContainerStyles>
    <SpinnerStyles>
      <BallTriangle
        ariaLabel={ariaLabel}
        height={height}
        width={width}
        radius={radius}
        color={color}
      />
    </SpinnerStyles>
  </ContainerStyles>
);

export default Loader;
