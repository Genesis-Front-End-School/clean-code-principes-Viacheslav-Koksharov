export {};

declare global {
  interface Window {
    Hls: {
      isSupported: () => boolean;
    };
  }
}
