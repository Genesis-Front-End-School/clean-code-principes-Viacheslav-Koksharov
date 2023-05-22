import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { waitFor } from '@testing-library/react';

import App from 'App';

Enzyme.configure({ adapter: new Adapter() });

// @ts-ignore
global.AbortSignal.timeout = jest.fn(() => ({
  signal: jest.fn(),
}));

describe('App', () => {
  it('should render App component', () => {
    const wrapper = shallow(<App />);
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
          token: '123',
        },
        isLoading: false,
        error: null,
      };
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    getToken().response.token;
    shallow(<App />);
    await waitFor(() => {
      expect(setState).toHaveBeenCalled();
    });
  });
});
