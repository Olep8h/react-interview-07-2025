"use client";

import CoursePage from "./CoursePage";

import withPlaylistData from "./HOC/withPlaylistData";
import fetchPlaylistOnMount from "./HOC/fetchPlaylistOnMount";

// Compose HOCs manually to avoid recompose and type errors
const EnhancedCoursePage = fetchPlaylistOnMount(withPlaylistData(CoursePage));

export default EnhancedCoursePage;
