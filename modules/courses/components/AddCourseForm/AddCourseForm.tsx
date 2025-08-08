'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCourse } from '../../coursesActions';

const AddCourseForm: React.FC = () => {
  const [playlistId, setPlaylistId] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!playlistId.trim()) return;
    dispatch(addCourse(playlistId.trim()));
    setPlaylistId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a new course</h2>
      <label>
        youtube playlist id:
        <input
          type="text"
          value={playlistId}
          onChange={e => setPlaylistId(e.target.value)}
        />
      </label>
      <button type="submit">Add course</button>
    </form>
  );
};

export default AddCourseForm;
