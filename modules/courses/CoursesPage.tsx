import AddCourseForm from "./components/AddCourseForm/AddCourseForm";
import CoursesList from "./components/CoursesList/CoursesList";
import StoreProvider from '../course/storeProvider';

type Props = {};

const CoursesPage: React.FC<Props> = () => {
  return (
    <StoreProvider>
      <div>
        <h1>Online courses tracker</h1>
        <h2>My courses</h2>
        <CoursesList />

        <AddCourseForm />
      </div>
    </StoreProvider>
  );
};

export default CoursesPage;
