import Hls from 'hls.js';

const handleElementFormat = (element, sourceLink) => {
  const hls = new Hls();
  hls.loadSource(sourceLink);
  hls.attachMedia(element);
};

export { handleElementFormat };
