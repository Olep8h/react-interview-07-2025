import { useDispatch } from "react-redux";

import { removeCourse } from "../../coursesActions";
import styles from "./CoursesListItem.module.scss";

type Props = {
  slug: string;
};

const CoursesListItem: React.FC<Props> = ({ slug }) => {
  const dispatch = useDispatch();
  return (
    <li className={styles["courses-list-item"]}>
      {slug}
      <button onClick={() => dispatch(removeCourse(slug))}>remove course</button>
    </li>
  );
};

export default CoursesListItem;
