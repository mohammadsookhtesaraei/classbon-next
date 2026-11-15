// next

import Image from "next/image";
import Link from "next/link";
// types
import { BlogPostCardProps } from "@/app/(blog)/_components/blog-post-card-types";
// components
import Badge from "@/app/_components/badge/badge";
// icons
import {
  IconCalendar,
  IconClock,
  IconComment,
  IconUserProfile,
} from "@/app/_components/icons/icons";

const BlogPostCard = ({
  title,
  coverImage,
  studyTime,
  author,
  postDate,
  numberOfViews,
  numberOfComments,
  isNew,
  slug,
}: BlogPostCardProps) => {
  return (
    <div className="card">
      <figure>
        <Image src={coverImage} width={550} height={327} alt={title} />
      </figure>
      <div className="card-body">
        <Link href={`/blog/${slug}`} className="card-title mb-auto">
          {title}
        </Link>
        <div className="flex items-center justify-between mt-2">
          <Badge variant="info" size="tiny">
            <IconUserProfile width={16} height={16} />
            {author}
          </Badge>
          <Badge variant="neutral">
            <IconCalendar width={16} height={16} />
            {postDate}
          </Badge>
        </div>
      </div>

      <div className="card-footer text-xs justify-between">
        <div className="flex gap-1">
          <Badge variant="accent">
            <IconComment width={16} height={16} />
          </Badge>
        </div>
        <span className="flex items-center gap-1">
          <IconClock width={16} height={16} />
          زمان مطالعه : {studyTime} دقیقه
        </span>
      </div>
    </div>
  );
};
export default BlogPostCard;
