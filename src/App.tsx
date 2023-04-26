import { useState, useEffect } from 'react';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Container from 'components/Container';
import Loader from 'components/Loader';
import Error from 'components/Error';
import site_unavailable from 'images/site_unavailable.jpg';
import route_unavailable from 'images/route_unavailable.jpg';
import { getToken, getCourses } from 'services/api';
import { colors } from 'utils/colors';
import { IToken } from 'interfaces/Token.interface';

const Homepage = lazy(
  () => import('views/HomePage' /* webpackChunkName: "HomePage" */),
);
const CoursePage = lazy(
  () => import('views/CoursePage' /* webpackChunkName: "CoursePage" */),
);
const LessonPage = lazy(
  () => import('views/LessonPage' /* webpackChunkName: "LessonPage" */),
);

const App: React.FC = () => {
  const [token, setToken] = useState<IToken>();
  const [currentCourses, setCurrentCourses] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCurrentToken = async () => {
      const response = await getToken();

      if (response.token) {
        setToken(response.token);
      } else {
        setError(response.message);
      }
    };

    getCurrentToken();
  }, []);

  useEffect(() => {
    const getCurrentCourses = async () => {
      if (token) {
        const response = await getCourses(token);

        if (response.message) {
          setError(response.message);
        } else {
          setCurrentCourses(response);
        }
      }
    };

    getCurrentCourses();
  }, [token]);

  return (
    <Container>
      <Suspense
        fallback={
          <Loader
            ariaLabel={'ThreeDots'}
            height={100}
            width={100}
            radius={5}
            color={colors.main}
          />
        }
      >
        {error ? (
          <Error error={error} image={site_unavailable} />
        ) : (
          <Routes>
            <Route
              path='/'
              element={<Homepage currentCourses={currentCourses} />}
            />
            <Route path='/courses/:id' element={<CoursePage />}>
              <Route path='lesson' element={<LessonPage />} />
            </Route>
            <Route
              path='*'
              element={<Error image={route_unavailable} route />}
            />
          </Routes>
        )}
      </Suspense>
      <ToastContainer />
    </Container>
  );
};

export default App;
