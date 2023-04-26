import { useState, useEffect, useContext } from 'react';
import CoursesList from 'components/CoursesList';
import ScrollTopButton from 'components/ScrollTopButton';
import Loader from 'components/Loader';
import Error from 'components/Error';
import site_unavailable from 'images/site_unavailable.jpg';
import { getCourses } from 'services/api';
import { ErrorContext } from 'context/ErrorContextProvider';
import { TokenContext } from 'context/TokenContextProvider';
import { colors } from 'utils/colors';
import { TitleStyles } from 'views/HomePage/HomePage.styled';

const HomePage = () => {
  const { error, setError } = useContext(ErrorContext);
  const { token } = useContext(TokenContext);
  const [courses, setCourses] = useState(null);
  const { main } = colors;

  useEffect(() => {
    if (token) {
      getCourses(token).then(response => {
        if (response.message) {
          setError(response.message);
        } else {
          setCourses(response);
        }
      });
    }
  }, [setError, token]);

  if (error) {
    return <Error error={error} image={site_unavailable} />;
  }

  if (courses) {
    return (
      <>
        <TitleStyles>Current Courses</TitleStyles>
        <CoursesList allCourses={courses} />
        <ScrollTopButton />
      </>
    );
  }

  return (
    <Loader
      ariaLabel={'ThreeDots'}
      height={100}
      width={100}
      radius={5}
      color={main}
    />
  );
};

export default HomePage;
