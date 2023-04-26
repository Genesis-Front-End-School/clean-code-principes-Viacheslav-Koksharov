import { useState, createContext } from 'react';
import {
  IErrorContext,
  IErrorContextProps,
} from 'interfaces/ErrorContext.interface';

const ErrorContext = createContext<IErrorContext>({
  error: null,
  setError: () => {},
});

const ErrorProvider = ({ children }: IErrorContextProps) => {
  const [error, setError] = useState(null);

  const sampleStatusContext: IErrorContext = {
    error,
    setError,
  };

  return (
    <ErrorContext.Provider value={sampleStatusContext}>
      {children}
    </ErrorContext.Provider>
  );
};

export { ErrorContext, ErrorProvider };
