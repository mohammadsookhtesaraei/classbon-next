import { Suspense } from "react"

import CoursesCardList from "@/app/(courses)/_components/course-card-list"
import { CardPlaceholder } from "@/app/_components/placeholders"

export const CourseSection = () => {
  return (
    <section className="container pt-20">
      <div className="text-center xl:text-right">
      <h2 className="text-2xl font-extrabold">تازه ترین دوره های آموزشی</h2>
      <p>برای به روز موندن، یادگرفتن نکته های ضروری</p>
    </div>
    <Suspense fallback={<CardPlaceholder count={4}/>}>
        <CoursesCardList/>
    </Suspense>
    </section>
  )
}
