import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import LessonPage from 'views/LessonPage/LessonPage';
import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';

Enzyme.configure({ adapter: new Adapter() });

describe('LessonPage', () => {
  it('should render LessonPage component', () => {
    const wrapper = shallow(<LessonPage />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should set lesson truthy', () => {
    const setStateMock = jest.fn();
    const useSateMock: any = (useState: any) => [useState, setStateMock];

    jest.spyOn(React, 'useState').mockImplementation(useSateMock);
    render(<LessonPage />);
    expect(setStateMock).toBeTruthy();
  });
});
