interface ITokenContext {
  token: string | null;
  setToken: (token) => void;
}

interface ITokenContextProps {
  children?: React.ReactNode;
}
export type { ITokenContext, ITokenContextProps };
