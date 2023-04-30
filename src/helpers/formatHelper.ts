import Hls from 'hls.js';

const handleElementFormat = (element: HTMLMediaElement, sourceLink: string) => {
  const hls = new Hls();
  hls.loadSource(sourceLink);
  hls.attachMedia(element);
};

export { handleElementFormat };
