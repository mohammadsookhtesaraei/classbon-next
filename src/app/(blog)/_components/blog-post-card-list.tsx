



// types
import { BlogPostSummary} from "@/types/blog-post-summary-interface";


// components
import BlogPostCard from "@/app/(blog)/_components/blog-post-card";

// props
type BlogPostCardListProps={
    posts:BlogPostSummary[]
}

const BlogPostCardList = ({posts}:BlogPostCardListProps) => {
  return (
    <div className="flex flex-wrap justify-center xl:justify-start gap-6 mt-10">
     {posts?.map((item)=>(
        <BlogPostCard key={`blog-post-${item.slug}`} {...item}/>
     ))}
    </div>
  )
}

export default BlogPostCardList