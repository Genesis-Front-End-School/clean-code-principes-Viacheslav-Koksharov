import { useState } from 'react';
import { BsArrowUpSquareFill } from 'react-icons/bs';
import { ButtonS } from './ScrollTopButton.styled';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <ButtonS>
      <BsArrowUpSquareFill
        onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none' }}
      />
    </ButtonS>
  );
};

export default ScrollButton;
