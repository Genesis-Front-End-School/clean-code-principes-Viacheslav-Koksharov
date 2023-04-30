import { useEffect, useContext } from 'react';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Container from 'components/Container';
import Error from 'components/Error';
import site_unavailable from 'images/site_unavailable.jpg';
import route_unavailable from 'images/route_unavailable.jpg';
import useFetch from 'hooks/useFetch';
import { TOKEN_URL } from 'helpers/constants';
import { TokenContext } from 'context/TokenContextProvider';

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
  const { token, setToken } = useContext(TokenContext);
  const { response, error } = useFetch(TOKEN_URL);

  useEffect(() => {
    if (response && response['token']) {
      setToken(response['token']);
    }
  }, [response, setToken]);

  return (
    <>
      {token && (
        <Container>
          <Suspense>
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/courses/:id' element={<CoursePage />}>
                <Route path='lesson' element={<LessonPage />} />
              </Route>
              <Route
                path='*'
                element={
                  <Error error={error} image={route_unavailable} route />
                }
              />
            </Routes>
          </Suspense>
          <ToastContainer />
        </Container>
      )}

      {error && <Error error={error} image={site_unavailable} />}
    </>
  );
};

export default App;
