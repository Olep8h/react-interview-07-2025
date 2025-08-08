import { useDispatch, useSelector, useStore } from "react-redux";
import type { AppDispatch, AppStore, RootState } from "./store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector = useSelector as <TSelected = unknown>(
  selector: (state: RootState) => TSelected
) => TSelected;
export const useAppStore: () => AppStore = useStore;

export const useCoursePage = () => {
  const coursePage = useAppSelector((state) => state.coursePage);
  return coursePage;
};
