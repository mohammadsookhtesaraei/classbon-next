

import { CourseSummary } from "@/types/course-summary-interface"

import { API_URL } from "@/configs/global";
import CourseCard from "@/app/(courses)/_components/course-card";


type CoursesCardListProps={
    courses?:CourseSummary[]
};


async function getNewstCourse(count:number):Promise<CourseSummary[]> {
  await new Promise((resolve)=>setTimeout(resolve,5000));

  const response=await fetch(`${API_URL}/courses/newest/${count}`,{cache:"no-store"});
  return response.json();
    
};


const CoursesCardList =async ({courses}:CoursesCardListProps) => {

     const newestCourseData=await getNewstCourse(4);
     
  return (
    <div className="flex flex-wrap justify-center xl:justify-start gap-6 mt-10">
        {newestCourseData.map((item)=>(
            <CourseCard key={`course-${item.slug}`} {...item}/>
        ))}
    </div>
  )
}
export default CoursesCardList