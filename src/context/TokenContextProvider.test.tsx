import { useContext } from 'react';
import { render, screen } from '@testing-library/react';
import { TokenContext, TokenProvider } from 'context/TokenContextProvider';

describe('<TokenProvider />', () => {
  const mockToken: string = 'RdIeE2_zrqeEvLwgzymtU4YXiWSuigzsNsU95SRxWgU';

  const ComponentSetToken = () => {
    const { setToken } = useContext(TokenContext);
    setToken(mockToken);
    return <></>;
  };

  const ComponentUseToken = () => {
    const { token } = useContext(TokenContext);
    return <p data-testid='Token'>{token}</p>;
  };

  test('should provide expected context to the child elements', () => {
    render(
      <TokenProvider>
        <ComponentSetToken />
        <ComponentUseToken />
      </TokenProvider>,
    );
    const element = screen.getByTestId('Token');
    expect(element.textContent).toEqual(mockToken);
  });
});
