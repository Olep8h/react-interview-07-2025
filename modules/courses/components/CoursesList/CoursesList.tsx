'use client';

import { useSelector } from "react-redux";
import CoursesListItem from "./CoursesListItem";

const CoursesList: React.FC = () => {
  const courses = useSelector((state: any) => state.courses.courses);
  return (
    <ul>
      {courses.map((slug: string) => (
        <CoursesListItem key={slug} slug={slug} />
      ))}
    </ul>
  );
};

export default CoursesList;
