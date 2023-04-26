import { BallTriangle } from 'react-loader-spinner';
import { ContainerS, SpinnerS } from './Loader.styled';
import { ILoader } from '../../interfaces/Loader.interfaces';

const Loader = ({ ariaLabel, height, width, radius, color }: ILoader) => {
  return (
    <ContainerS>
      <SpinnerS>
        <BallTriangle
          ariaLabel={ariaLabel}
          height={height}
          width={width}
          radius={radius}
          color={color}
        />
      </SpinnerS>
    </ContainerS>
  );
};

export default Loader;
