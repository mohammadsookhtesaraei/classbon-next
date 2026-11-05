import {Featuresection} from "./_components/home/featuressection";
import { HeroSection } from "./_components/home/herosection";
import {Reactnextupdatesection} from "./_components/home/reactnextupdatesection";
import {Testimonialsection }from "./_components/home/testimonialsection";


export default function Home() {
 return(
  <div>
    <HeroSection/>
    <Featuresection/>
    {/* course*/}
    <Reactnextupdatesection/>
    {/* blog */}
    <Testimonialsection/>
  </div>
 )
}
