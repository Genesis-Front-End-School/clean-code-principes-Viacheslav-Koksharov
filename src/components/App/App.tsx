import { useState, useEffect } from 'react';
import { getToken, getCourses } from '../../services/api';
import { IToken } from '../../interfaces/Token.interface';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { colors } from '../../utils/colors';
import site_unavailable from '../../images/site_unavailable.jpg';
import route_unavailable from '../../images/route_unavailable.jpg';
import Container from '../Container/Container';
import Loader from '../Loader/Loader';
import Error from '../Error';

const Homepage = lazy(
  () =>
    import('../../views/HomePage/HomePage' /* webpackChunkName: "HomePage" */),
);
const CoursePage = lazy(
  () =>
    import(
      '../../views/CoursePage/CoursePage' /* webpackChunkName: "CoursePage" */
    ),
);
const LessonPage = lazy(
  () =>
    import(
      '../../views/LessonPage/LessonPage' /* webpackChunkName: "LessonPage" */
    ),
);

const App: React.FC = () => {
  const [token, setToken] = useState<IToken>();
  const [currentCourses, setCurrentCourses] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getCurrentToken() {
      const response = await getToken();

      if (response.token) {
        setToken(response.token);
      } else {
        setError(response.message);
      }
    }

    getCurrentToken();
  }, []);

  useEffect(() => {
    async function getCurrentCourses() {
      if (token) {
        const response = await getCourses(token);

        if (response.message) {
          setError(response.message);
        } else {
          setCurrentCourses(response);
        }
      }
    }

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
              path="/"
              element={<Homepage currentCourses={currentCourses} />}
            />
            <Route path="/courses/:id" element={<CoursePage />}>
              <Route path="lesson" element={<LessonPage />} />
            </Route>
            <Route
              path="*"
              element={<Error image={route_unavailable} route />}
            />
          </Routes>
        )}
      </Suspense>
    </Container>
  );
};

export default App;
