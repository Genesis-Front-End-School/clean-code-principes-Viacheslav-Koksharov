const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const handleScrollToElement = (element: HTMLHeadingElement) => {
  element?.scrollIntoView({ behavior: 'smooth' });
};

export { handleScrollToTop, handleScrollToElement };
