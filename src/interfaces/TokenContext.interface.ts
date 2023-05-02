interface ITokenContext {
  token: string | null;
  setToken: (token: string | null) => void;
}

interface ITokenContextProps {
  children?: React.ReactNode;
}
export type { ITokenContext, ITokenContextProps };
