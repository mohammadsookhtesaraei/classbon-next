import { CourseLecture } from "@/types/course-lecture.interface";

export interface CourseChapter {
    id: number;
    title: string;
    numOfLectures: number;
    duration: number;
    lectures: CourseLecture[];
}
