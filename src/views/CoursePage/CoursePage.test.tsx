import Enzyme, { shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import CoursePage from 'views/CoursePage/CoursePage';

Enzyme.configure({ adapter: new Adapter() });

describe('HomePage', () => {
  it('should render CoursePage component', () => {
    const wrapper = shallow(<CoursePage />);
    expect(wrapper.exists()).toBe(true);
  });
});
