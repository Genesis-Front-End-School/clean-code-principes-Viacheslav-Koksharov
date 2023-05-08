import Enzyme, { shallow } from 'enzyme';
import { render, screen } from '@testing-library/react';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import LessonsList from 'components/LessonsList/LessonsList';
import { ILessonItem } from 'interfaces/LessonsItem.interface';
Enzyme.configure({ adapter: new Adapter() });

describe('LessonsList', () => {
  const IProps: ILessonItem[] = [
    {
      duration: 521,
      id: '352be3c6-848b-4c19-9e7d-54fe68fef183',
      link: 'https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/preview/AppleHLS1/preview.m3u8',
      order: 4,
      meta: null,
      previewImageLink:
        'https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it/preview',
      status: 'launched',
      title: 'title 1',
      type: 'launched',
    },
  ];

  it('should render LessonsList component', () => {
    const wrapper = shallow(<LessonsList lessons={IProps} />);
    expect(wrapper.exists()).toEqual(true);
  });
  it('should render LessonsList without data', () => {
    render(<LessonsList lessons={[]} />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
