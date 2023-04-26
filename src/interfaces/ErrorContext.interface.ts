interface IErrorContext {
  error: string | null;
  setError: (error) => void;
}

interface IErrorContextProps {
  children?: React.ReactNode;
}
export type { IErrorContext, IErrorContextProps };
