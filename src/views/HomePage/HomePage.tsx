import { useState, useEffect, useContext, useRef } from 'react';
import Loader from 'components/Loader';
import CoursesList from 'components/CoursesList';
import ScrollTopButton from 'components/ScrollTopButton';
import Error from 'components/Error';
import site_unavailable from 'images/site_unavailable.jpg';
import useFetch from 'hooks/useFetch';
import { COURSES_URL } from 'helpers/constants';
import { TokenContext } from 'context/TokenContextProvider';
import { colors } from 'utils/colors';
import { TitleStyles } from 'views/HomePage/HomePage.styled';

const HomePage = () => {
  const listRef = useRef<HTMLUListElement>(null);
  const { token } = useContext(TokenContext);
  const { response, isLoading, error } = useFetch(COURSES_URL, token);
  const [courses, setCourses] = useState(null);
  const { main } = colors;

  useEffect(() => {
    if (listRef.current) return;

    if (response && response['courses']) {
      setCourses(response['courses']);
    }
  }, [token, response]);

  return (
    <>
      {isLoading && (
        <Loader
          ariaLabel={'ThreeDots'}
          height={100}
          width={100}
          radius={5}
          color={main}
        />
      )}

      {courses && (
        <>
          <TitleStyles>Current Courses</TitleStyles>
          <CoursesList currentRef={listRef} courses={courses} />
          <ScrollTopButton />
        </>
      )}

      {error && <Error error={error} image={site_unavailable} />}
    </>
  );
};

export default HomePage;
