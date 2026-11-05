import Feature from "@/app/_components/feature/feature";
import { homeFeatures } from "@/constants/home-features";

export  const Featuresection = () => {
  return (
    <section className="dark:bg-base-75 mt-10">
      <div className="container flex py-10 flex-col-reverse items-center lg:items-start lg:flex-row gap-10 xl:gap-5">
        {homeFeatures.map((item) => (
          <Feature key={`feature-${item.title}`} feature={item} />
        ))}
      </div>
    </section>
  );
};

