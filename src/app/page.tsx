
// types
import { BlogPostSummary } from "@/types/blog-post-summary-interface";

// api
import { API_URL } from "@/configs/global";


import { HeroSection } from "./_components/home/herosection";
import { Featuresection } from "./_components/home/featuressection";
import {CourseSection} from "./_components/home/coursesection";
import { Reactnextupdatesection } from "./_components/home/reactnextupdatesection";
import {BlogPostSection} from "./_components/home/blogpostsection";
import { Testimonialsection } from "./_components/home/testimonialsection";


// async function - isr
async function getNewestPosts(count: number):Promise<BlogPostSummary[]> {
  const response = await fetch(`${API_URL}/blog/newest/${count}`,{
    next:{revalidate:24 * 60 * 60}
  } 
   ); 
  
  return await response.json();
}


export default async function Home() {

    const newestBlogPostsData = getNewestPosts (4);
    const [newestBlogPosts] = await Promise.all([newestBlogPostsData]);

    
  return (
    <div>
      <HeroSection />
      <Featuresection />
      <CourseSection />
      <Reactnextupdatesection />
      <BlogPostSection posts={newestBlogPosts} />
      <Testimonialsection />
    </div>
  );
}
