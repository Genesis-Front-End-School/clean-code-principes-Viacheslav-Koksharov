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

// import * as React from 'react';
// import '@testing-library/jest-dom';
// import Enzyme, { shallow } from 'enzyme';
// import Adapter from '@cfaester/enzyme-adapter-react-18';
// import { waitFor } from '@testing-library/react';
// // import { render, screen } from '@testing-library/react';
// // import { MemoryRouter } from 'react-router-dom';
// import App from 'App';
// // import Error from './components/Error/Error';
// // import './views/HomePage/HomePage';
// // import './views/CoursePage/CoursePage';
// // import './views/LessonPage/LessonPage';

// Enzyme.configure({ adapter: new Adapter() });

// // @ts-ignore
// global.AbortSignal.timeout = jest.fn(() => ({
//   signal: jest.fn(),
// }));

// jest.mock('views/HomePage', () => () => <div data-testid='home' />);
// jest.mock('views/CoursePage', () => () => <div data-testid='course' />);
// jest.mock('views/LessonPage', () => () => <div data-testid='lesson' />);
// jest.mock('./components/Error/Error', () => () => <div data-testid='error' />);

// describe('App', () => {
//   it('should render App component', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.exists()).toBe(true);
//   });

//   it('should call setState hook', async () => {
//     const setState = jest.fn();
//     const useState: any = (initialState: any) => [initialState, setState];
//     jest.spyOn(React, 'useState').mockImplementation(useState);
//     jest.spyOn(React, 'useEffect').mockImplementation(f => f());
//     const getToken = jest.fn(() => {
//       return {
//         response: {
//           token: '123',
//         },
//         isLoading: false,
//         error: null,
//       };
//     });
//     // eslint-disable-next-line @typescript-eslint/no-unused-expressions
//     getToken().response.token;
//     shallow(<App />);
//     await waitFor(() => {
//       expect(setState).toHaveBeenCalled();
//     });
//   });
//   //   test("should render lazy HomePage component for '/' route", async () => {
//   //     const LazyHomePage = React.lazy(() => import('views/HomePage'));
//   //     const LazyComponent = () => <LazyHomePage />;

//   //     render(
//   //       <MemoryRouter initialEntries={['/']}>
//   //         <React.Suspense fallback='Test is loading'>
//   //           <LazyComponent />
//   //         </React.Suspense>
//   //       </MemoryRouter>,
//   //     );

//   //     await screen
//   //       .findByTestId('home')
//   //       .then(element => expect(element).toBeInTheDocument());
//   //   });

//   //   test("should render lazy CoursePage component for '/courses/:id' route", async () => {
//   //     const LazyCoursePage = React.lazy(() => import('views/CoursePage'));
//   //     const LazyComponent = () => <LazyCoursePage />;

//   //     render(
//   //       <MemoryRouter initialEntries={['/courses/:123']}>
//   //         <React.Suspense fallback='Test is loading'>
//   //           <LazyComponent />
//   //         </React.Suspense>
//   //       </MemoryRouter>,
//   //     );

//   //     await screen
//   //       .findByTestId('course')
//   //       .then(element => expect(element).toBeInTheDocument());
//   //   });

//   //   test("should render lazy LessonPage component for 'lesson' route", async () => {
//   //     const LazyLessonPage = React.lazy(() => import('views/LessonPage'));
//   //     const LazyComponent = () => <LazyLessonPage />;

//   //     render(
//   //       <MemoryRouter initialEntries={['lesson555']}>
//   //         <React.Suspense fallback='Test is loading'>
//   //           <LazyComponent />
//   //         </React.Suspense>
//   //       </MemoryRouter>,
//   //     );

//   //     await screen
//   //       .findByTestId('lesson')
//   //       .then(element => expect(element).toBeInTheDocument());
//   //   });

//   //   test('should render Error component for unknown route', async () => {
//   //     render(
//   //       <MemoryRouter initialEntries={['/unknown']}>
//   //         <React.Suspense fallback='Test is loading'>
//   //           <Error />
//   //         </React.Suspense>
//   //       </MemoryRouter>,
//   //     );

//   //     await screen
//   //       .findByTestId('error')
//   //       .then(element => expect(element).toBeInTheDocument());
//   //   });

//   //   test('should render Error component', async () => {
//   //     const LazyError = React.lazy(() => import('components/Error'));

//   //     const LazyErrorComponent = () => (
//   //       <div>
//   //         LazyError is here:
//   //         <LazyError />
//   //       </div>
//   //     );

//   //     render(
//   //       <React.Suspense fallback='Test is loading'>
//   //         <LazyErrorComponent />
//   //       </React.Suspense>,
//   //     );
//   //     const lazyElement = await screen.findByText(/LazyError is here:/i);
//   //     expect(lazyElement).toBeInTheDocument();
//   //   });
// });
