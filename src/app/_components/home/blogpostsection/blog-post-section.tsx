// next
import Link from "next/link";
// types
import { BlogPostSummary } from "@/types/blog-post-summary-interface";

// components
import Button from "@/app/_components/button/Button";

// icons
import { IconArrowLeftFill } from "@/app/_components/icons/icons";
import BlogPostCardList from "@/app/(blog)/_components/blog-post-card-list";

type BlogPostsSectionProps = {
  posts: BlogPostSummary[];
};

export const BlogPostSection = ({ posts }: BlogPostsSectionProps) => {
  return (
    <section className="container py-20">
      <div className="flex flex-col xl:flex-row gap-4 justify-center xl:justify-between items-center">
        <div className="text-center xl:text-right">
          <h2 className="text-2xl font-extrabold">
            تازه‌ترین مقاله‌های آموزشی
          </h2>
          <p className="mt-3 text-lg">
            به رایگان، به‌روزترین مقاله‌های دنیای تکنولوژی رو در اختیارت
            می‌ذاریم؛ چون پیشرفتت برامون مهمه!
          </p>
        </div>
        <Link href="/blog">
          <Button
            variant="neutral"
            className="font-semibold"
            animatedIcon={true}
          >
            همه مقاله‌ها
            <IconArrowLeftFill fill="currentColor" />
          </Button>
        </Link>
      </div>
      <BlogPostCardList posts={posts} />
    </section>
  );
};
