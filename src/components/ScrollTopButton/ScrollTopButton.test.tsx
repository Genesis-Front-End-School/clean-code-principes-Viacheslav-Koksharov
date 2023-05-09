import Enzyme, { shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { render, fireEvent, waitFor } from '@testing-library/react';
import ScrollTopButton from 'components/ScrollTopButton/ScrollTopButton';

Enzyme.configure({ adapter: new Adapter() });

describe('ScrollTopButton', () => {
  it('should render ScrollTopButton component', () => {
    const wrapper = shallow(<ScrollTopButton />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the component only after scrolling down', async () => {
    render(<ScrollTopButton />);
    fireEvent.scroll(window, { target: { scrollY: 400 } });
    await waitFor(() => {
      expect(window.scrollY).toBe(400);
    });
  });
});
