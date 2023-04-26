import CoursesList from 'components/CoursesList/CoursesList';
import ScrollTopButton from 'components/ScrollTopButton/ScrollTopButton';
import Loader from 'components/Loader';
import { colors } from 'utils/colors';
import { TitleStyles } from 'views/HomePage/HomePage.styled';

const HomePage = ({ currentCourses }) => {
  return (
    <>
      {currentCourses ? (
        <>
          <TitleStyles>Current Courses</TitleStyles>
          <CoursesList currentCourses={currentCourses} />
        </>
      ) : (
        <Loader
          ariaLabel={'ThreeDots'}
          height={100}
          width={100}
          radius={5}
          color={colors.main}
        />
      )}
      <ScrollTopButton />
    </>
  );
};

export default HomePage;
