// next
import Image from "next/image";
import Link from "next/link";

// type
import { CourseSummary } from "@/types/course-summary-interface";
// icon
import { IconArrowLeftFill, IconClock } from "@/app/_components/icons/icons";

// components

import Badge from "@/app/_components/badge/badge";
import Price from "@/app/_components/price/price";


const CourseCard= ({
  coverImageId,
  title,
  subTitle,
  level,
  recordStatus,
  basePrice,
  duration,
  slug,
}:CourseSummary ) => {
  return (
    <div className="card">
        {/* image */}
        <figure>
         <Image
          src={`https://api.classbon.com/api/picture/${coverImageId}`}
          alt={title}
          width={550}
          height={327}
        />
        </figure>

        {/* level */}
        <div className="flex gap-2 font-semibold dark:text-info px-3 py-2">
        <Badge variant="info">{recordStatus}</Badge>
        <Badge variant="accent">{level}</Badge>
        </div>
        {/* duration-and price */}
        <div className="card-body">
         <Link href={`/course/${slug}/`}>{title}</Link>
         <p>{subTitle}</p>
         <div className="flex items-center justify-between mt-3">
            <Badge variant="warning">
            <IconClock width={16} height={16} />
            {duration}
          </Badge>
          <Price price={basePrice} size="small" />
         </div>
        </div>

        {/* more-details */}
        <Link className="card-footer  animated-icon" href={`/courses/${slug}`}>
        مشاهده جزئیات دوره
        <IconArrowLeftFill fill="currentColor" />
      </Link>
    </div>
  )
}
export default CourseCard