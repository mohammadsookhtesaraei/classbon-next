import {Featuresection} from "./_components/home/featuressection";
import { HeroSection } from "./_components/home/herosection";
import {Reactnextupdatesection} from "./_components/home/reactnextupdatesection";


export default function Home() {
 return(
  <div>
    <HeroSection/>
    <Featuresection/>
    <Reactnextupdatesection/>
  </div>
 )
}
