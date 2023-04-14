import video_unavailable from '../images/video_unavailable.png';

const onHoverElement = (element, sourceAttr = '') => {
  let start;

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
      element.src = sourceAttr;
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

export { onHoverElement };
