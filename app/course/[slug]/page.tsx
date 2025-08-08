"use client";
import CoursePageContainer from "@/modules/course/CoursePageContainer";

const playlistIds = {
  java: "PLYPjPMiw3_YsVockWfuuhoP86YPDUXp4f",
  "free-code-camp": "UU8butISFwT-Wl7EV0hUK0BQ",
  "ten-days-of-javascript": "PLpcSpRrAaOaoIqHQddZOdbRrzr5dJtgSs",
  "fk-2024-e": "PLnXfazh66kVfUsfw9Oh5rBttZHaJe6HKB",
  "fk-2024-p": "PLnXfazh66kVd0jXpYliCLAreHc4TDwnTf",
  "fk-2024-f": "PLnXfazh66kVc8TRx1qmK3wshWs330_xsK",
} as const;

type PlaylistSlug = keyof typeof playlistIds;

interface CoursePageProps {
  params: {
    slug: PlaylistSlug;
  };
}

export default function Course({ params: { slug } }: CoursePageProps) {
  return <CoursePageContainer playlistId={playlistIds[slug]} />;
}
