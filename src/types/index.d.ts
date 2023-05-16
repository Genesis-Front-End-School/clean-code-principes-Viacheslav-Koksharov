export {};

declare global {
  interface Window {
    Hls: {
      isSupported: () => boolean;
    };
  }
}

declare module '@mui/material/styles' {
  interface ThemeOptions {
    accent?: string;
  }
}
