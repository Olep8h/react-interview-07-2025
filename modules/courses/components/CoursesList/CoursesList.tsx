'use client';

import { useSelector } from "react-redux";
import CoursesListItem from "./CoursesListItem";

interface CoursesState {
  courses: string[];
}

const CoursesList: React.FC = () => {
  const courses = useSelector((state: { courses: CoursesState }) => state.courses.courses);
  return (
    <ul>
      {courses.map((slug: string) => (
        <CoursesListItem key={slug} slug={slug} />
      ))}
    </ul>
  );
};

export default CoursesList;
