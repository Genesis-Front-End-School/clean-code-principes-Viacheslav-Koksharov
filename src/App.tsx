import { useEffect, useContext } from 'react';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Container from 'components/Container';
import Loader from 'components/Loader';
import Error from 'components/Error';
import site_unavailable from 'images/site_unavailable.jpg';
import route_unavailable from 'images/route_unavailable.jpg';
import { getToken } from 'services/api';
import { ErrorContext } from 'context/ErrorContextProvider';
import { TokenContext } from 'context/TokenContextProvider';
import { colors } from 'utils/colors';

const Homepage = lazy(
  () => import('views/HomePage' /* webpackChunkName: 'HomePage' */),
);
const CoursePage = lazy(
  () => import('views/CoursePage' /* webpackChunkName: 'CoursePage' */),
);
const LessonPage = lazy(
  () => import('views/LessonPage' /* webpackChunkName: 'LessonPage' */),
);

const App: React.FC = () => {
  const { error, setError } = useContext(ErrorContext);
  const { setToken } = useContext(TokenContext);
  const { main } = colors;

  useEffect(() => {
    getToken().then(response => {
      if (response.message) {
        setError(response.message);
      } else {
        setToken(response);
      }
    });
  }, [setError, setToken]);

  if (error) {
    return <Error error={error} image={site_unavailable} />;
  }

  return (
    <Container>
      <Suspense
        fallback={
          <Loader
            ariaLabel={'ThreeDots'}
            height={100}
            width={100}
            radius={5}
            color={main}
          />
        }
      >
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/courses/:id' element={<CoursePage />}>
            <Route path='lesson' element={<LessonPage />} />
          </Route>
          <Route
            path='*'
            element={<Error error={error} image={route_unavailable} route />}
          />
        </Routes>
      </Suspense>
      <ToastContainer />
    </Container>
  );
};

export default App;
