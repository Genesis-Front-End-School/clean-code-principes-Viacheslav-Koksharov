import Enzyme, { shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Error from 'components/Error/Error';

Enzyme.configure({ adapter: new Adapter() });

describe('Error', () => {
  it('should render Error component', () => {
    const wrapper = shallow(<Error />);
    expect(wrapper.exists()).toBe(true);
  });
});
