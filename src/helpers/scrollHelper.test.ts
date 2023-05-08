import { handleScrollToTop, handleScrollToElement } from './scrollHelper';

describe('handleScrollToTop', () => {
  const scrollToTopSpy = jest.fn();
  global.scrollTo = scrollToTopSpy;

  test('should scroll to the top of the document', () => {
    handleScrollToTop();
    expect(scrollToTopSpy).toHaveBeenCalledTimes(1);
  });
});

describe('handleScrollToElement', () => {
  const dummyElement = document.createElement('h1');
  dummyElement.scrollIntoView = jest.fn();

  test('should scroll to the element', () => {
    handleScrollToElement(dummyElement);
    expect(dummyElement.scrollIntoView).toHaveBeenCalledTimes(1);
  });
});
