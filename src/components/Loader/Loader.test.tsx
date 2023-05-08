import Enzyme, { shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Loader from 'components/Loader/Loader';

Enzyme.configure({ adapter: new Adapter() });

describe('Loader', () => {
  it('should render Loader component', () => {
    const wrapper = shallow(
      <Loader ariaLabel={''} height={''} width={''} radius={''} color={''} />,
    );
    expect(wrapper.exists()).toBe(true);
  });
});
