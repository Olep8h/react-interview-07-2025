import { ADD_COURSE, REMOVE_COURSE } from './coursesActions';

export interface CourseState {
  courses: string[];
}

const initialState: CourseState = {
  courses: ['java', 'free-code-camp', 'ten-days-of-javascript'],
};

type CoursePayload = { playlistId: string };

export default function coursesReducer(
  state = initialState,
  action: { type: string; payload?: CoursePayload }
): CourseState {
  switch (action.type) {
    case ADD_COURSE: {
      if (!action.payload) return state;
      const { playlistId } = action.payload;
      if (state.courses.includes(playlistId)) return state;
      return { ...state, courses: [...state.courses, playlistId] };
    }
    case REMOVE_COURSE: {
      if (!action.payload) return state;
      const { playlistId } = action.payload;
      return { ...state, courses: state.courses.filter(id => id !== playlistId) };
    }
    default:
      return state;
  }
}

