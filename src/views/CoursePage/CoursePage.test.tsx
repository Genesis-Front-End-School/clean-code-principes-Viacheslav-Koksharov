import Enzyme, { shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import CoursePage from 'views/CoursePage/CoursePage';

Enzyme.configure({ adapter: new Adapter() });

describe('HomePage', () => {
  it('should render CoursePage component', () => {
    const wrapper = shallow(<CoursePage />);
    expect(wrapper.exists()).toBe(true);
  });
  // it('should render `This list is empty` inside a Paragraph component if items is an empty array', () => {
  //   const skills = [
  //     'Aligning your goals with your motives',
  //     'Overcoming decision paralysis',
  //     'Reframing negative self-talk',
  //     'Gaining clarity',
  //     'Challenging yourself',
  //   ];
  //   const wrapper = shallow(<CoursePage skills={skills} />);
  //   const paragraph = wrapper.find(Paragraph);
  //   expect(paragraph.props().children).toEqual('This list is empty');
  // });
});
