import { useState, useEffect, useContext } from 'react';
import CoursesList from 'components/CoursesList';
import ScrollTopButton from 'components/ScrollTopButton';
import Loader from 'components/Loader';
import Error from 'components/Error';
import site_unavailable from 'images/site_unavailable.jpg';
import { IDLE, PENDING, RESOLVED, REJECTED } from 'helpers/constants';
import { getCourses } from 'services/api';
import { TokenContext } from 'context/TokenContextProvider';
import { colors } from 'utils/colors';
import { TitleStyles } from 'views/HomePage/HomePage.styled';

const HomePage = () => {
  const { token } = useContext(TokenContext);
  const [status, setStatus] = useState(IDLE);
  const [courses, setCourses] = useState(null);
  const [error, setError] = useState(null);
  const { main } = colors;

  useEffect(() => {
    setStatus(PENDING);

    if (token) {
      getCourses(token).then(response => {
        if (response.message) {
          setStatus(REJECTED);
          setError(response.message);
        } else {
          setStatus(RESOLVED);
          setCourses(response);
        }
      });
    }
  }, [token]);

  if (status === PENDING)
    return (
      <Loader
        ariaLabel={'ThreeDots'}
        height={100}
        width={100}
        radius={5}
        color={main}
      />
    );

  if (status === REJECTED)
    return <Error error={error} image={site_unavailable} />;

  if (status === RESOLVED)
    return (
      <>
        <TitleStyles>Current Courses</TitleStyles>
        <CoursesList allCourses={courses} />
        <ScrollTopButton />
      </>
    );

  return <></>;
};

export default HomePage;
