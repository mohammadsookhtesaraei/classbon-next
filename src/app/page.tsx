import CourseSection from "@/app/_components/home/coursesection/course-section";
import {Featuresection} from "./_components/home/featuressection";
import { HeroSection } from "./_components/home/herosection";
import {Reactnextupdatesection} from "./_components/home/reactnextupdatesection";
import {Testimonialsection }from "./_components/home/testimonialsection";




export default function Home() {
 return(
  <div>
    <HeroSection/>
    <Featuresection/>
     <CourseSection/>
    <Reactnextupdatesection/>
    {/* blog */}
    <Testimonialsection/>
  </div>
 )
}
