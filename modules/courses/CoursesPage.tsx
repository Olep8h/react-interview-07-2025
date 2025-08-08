import AddCourseForm from "./components/AddCourseForm/AddCourseForm";
import CoursesList from "./components/CoursesList/CoursesList";

const CoursesPage: React.FC = () => {
  return (
    <div>
      <h1>Online courses tracker</h1>
      <h2>My courses</h2>
      <CoursesList />

      <AddCourseForm />
    </div>
  );
};

export default CoursesPage;
