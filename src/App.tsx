import { useEffect, useContext } from 'react';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider as ThemeComposerProvider } from 'styled-components';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Container from 'components/Container';
import Error from 'components/Error';
import Toggle from 'components/Toggler';
import site_unavailable from 'images/site_unavailable.jpg';
import route_unavailable from 'images/route_unavailable.jpg';
import useMode from 'hooks/useMode';
import useFetch from 'hooks/useFetch';
import { lightTheme, darkTheme,GlobalStyles} from 'helpers/themes';
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
  const [theme, toggleTheme] = useMode();

  const defaultTheme = createTheme(lightTheme);
  const themeMode = theme === 'light' ? defaultTheme : darkTheme;

  useEffect(() => {
    if (response && response['token']) {
      setToken(response['token']);
    }
  }, [response, setToken]);

  if (token)
    return (
      <ThemeProvider theme={defaultTheme}>
        <ThemeComposerProvider theme={themeMode}>
          <>
            <Container>
              <GlobalStyles />
              <Toggle theme={theme} toggleTheme={toggleTheme} />
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
          </>
        </ThemeComposerProvider>
      </ThemeProvider>
    );

  if (error) return <Error error={error} image={site_unavailable} />;

  return <></>;
};

export default App;
