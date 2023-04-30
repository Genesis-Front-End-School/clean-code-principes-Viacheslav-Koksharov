import { useState, createContext } from 'react';
import {
  ITokenContext,
  ITokenContextProps,
} from 'interfaces/TokenContext.interface';

const TokenContext = createContext<ITokenContext>({
  token: null,
  setToken: () => {},
});

const TokenProvider = ({ children }: ITokenContextProps) => {
  const [token, setToken] = useState<string | null>(null);

  const sampleTokenContext: ITokenContext = {
    token,
    setToken,
  };

  return (
    <TokenContext.Provider value={sampleTokenContext}>
      {children}
    </TokenContext.Provider>
  );
};

export { TokenContext, TokenProvider };
