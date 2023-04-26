import { useEffect, useState } from 'react';
import { BsArrowUpSquareFill } from 'react-icons/bs';
import { handleScrollToTop } from 'helpers/scrollHelper';
import { ButtonStyles } from 'components/ScrollTopButton/ScrollTopButton.styled';

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleVisibility = () => {
      const scroll = document.documentElement.scrollTop;

      if (scroll > 300) {
        setIsVisible(true);
      }

      if (scroll <= 300) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleVisibility);

    return () => {
      window.removeEventListener('scroll', handleVisibility);
    };
  }, []);

  return (
    <ButtonStyles>
      <BsArrowUpSquareFill
        onClick={handleScrollToTop}
        style={{ display: isVisible ? 'inline' : 'none' }}
      />
    </ButtonStyles>
  );
};

export default ScrollTopButton;
