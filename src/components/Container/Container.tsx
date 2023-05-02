import { IContainerProps } from 'interfaces/Container.interface';
import { ContainerStyles } from 'components/Container/Container.styled';

const Container = ({ children }: IContainerProps) => (
  <ContainerStyles>{children}</ContainerStyles>
);

export default Container;
