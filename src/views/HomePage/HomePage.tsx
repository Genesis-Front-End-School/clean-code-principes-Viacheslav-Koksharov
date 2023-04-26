import { colors } from '../../utils/colors';
import CoursesList from '../../components/CoursesList/CoursesList';
import ScrollTopButton from '../../components/ScrollTopButton/ScrollTopButton';
import Loader from '../../components/Loader';
import { TitleS } from './HomePage.styled';

const HomePage = ({ currentCourses }) => {
  return (
    <>
      {currentCourses ? (
        <>
          <TitleS>Current Courses</TitleS>
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
