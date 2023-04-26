import { useState, useEffect, useContext } from 'react';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Container from 'components/Container';
import Loader from 'components/Loader';
import Error from 'components/Error';
import site_unavailable from 'images/site_unavailable.jpg';
import route_unavailable from 'images/route_unavailable.jpg';
import { IDLE, RESOLVED, REJECTED } from 'helpers/constants';
import { getToken } from 'services/api';
import { TokenContext } from 'context/TokenContextProvider';
import { colors } from 'utils/colors';

const Homepage = lazy(
  () => import('views/HomePage/index' /* webpackChunkName: 'HomePage' */),
);
const CoursePage = lazy(
  () => import('views/CoursePage/index' /* webpackChunkName: 'CoursePage' */),
);
const LessonPage = lazy(
  () => import('views/LessonPage/index' /* webpackChunkName: 'LessonPage' */),
);

const App: React.FC = () => {
  const { setToken } = useContext(TokenContext);
  const [status, setStatus] = useState(IDLE);
  const [error, setError] = useState(null);
  const { main } = colors;

  useEffect(() => {
    getToken().then(response => {
      if (response.message) {
        setStatus(REJECTED);
        setError(response.message);
      } else {
        setStatus(RESOLVED);
        setToken(response);
      }
    });
  }, [setToken]);

  if (status === REJECTED)
    return <Error error={error} image={site_unavailable} />;

  if (status === RESOLVED)
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
              element={<Error image={route_unavailable} route />}
            />
          </Routes>
        </Suspense>
        <ToastContainer />
      </Container>
    );

  return <></>;
};

export default App;
