import video_unavailable from 'images/video_unavailable.png';

const handleElementHover = (element, sourceLink = '') => {
  let start: NodeJS.Timeout;

  const startPreview = () => {
    if (element.play && typeof element.play === 'function') {
      element.play();
    } else {
      element.src = video_unavailable;
    }
  };

  const stopPreview = () => {
    if (element.pause && typeof element.pause === 'function') {
      element.pause();
    } else {
      element.src = sourceLink;
    }
  };

  element.addEventListener('mouseenter', () => {
    start = setTimeout(startPreview, 1000);
  });

  element.addEventListener('mouseleave', () => {
    clearTimeout(start);
    stopPreview();
  });
};

export { handleElementHover };
