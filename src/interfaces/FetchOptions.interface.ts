interface IFetchOptions {
  signal: AbortSignal;
  headers?: {
    Authorization?: string;
  };
}

export type { IFetchOptions };
