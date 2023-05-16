import Enzyme, { shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import HomePage from 'views/HomePage/HomePage';
import React from 'react';
import { waitFor } from '@testing-library/react';

Enzyme.configure({ adapter: new Adapter() });

// @ts-ignore
global.AbortSignal.timeout = jest.fn(() => ({
  signal: jest.fn(),
}));

describe('HomePage', () => {
  it('should render HomePage component', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.exists()).toBe(true);
  });
  it('should call setState hook', async () => {
    const setState = jest.fn();
    const useState: any = (initialState: any) => [initialState, setState];
    jest.spyOn(React, 'useState').mockImplementation(useState);
    jest.spyOn(React, 'useEffect').mockImplementation(f => f());
    const getToken = jest.fn(() => {
      return {
        response: {
          courses: [],
        },
        isLoading: false,
        error: null,
      };
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    getToken().response.courses;
    shallow(<HomePage />);
    await waitFor(() => {
      expect(setState).toHaveBeenCalled();
    });
  });
});
