import Enzyme, { mount } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Container from 'components/Container/Container';

Enzyme.configure({ adapter: new Adapter() });

describe('Container', () => {
  it('should render Container component', () => {
    const wrapper = mount(<Container />);
    expect(wrapper.exists()).toBe(true);
  });
});
