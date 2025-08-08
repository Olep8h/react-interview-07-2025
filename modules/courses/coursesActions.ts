export const ADD_COURSE = 'courses/ADD_COURSE';
export const REMOVE_COURSE = 'courses/REMOVE_COURSE';

export const addCourse = (playlistId: string) => ({
  type: ADD_COURSE,
  payload: { playlistId },
});

export const removeCourse = (playlistId: string) => ({
  type: REMOVE_COURSE,
  payload: { playlistId },
});

