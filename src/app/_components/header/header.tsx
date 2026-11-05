import Image from "next/image";
import TopNavigation from "./top-navigation";

export const Header = () => {
  return (
    <header className="border-b dark:border-base-content/10">
      <nav className="container flex items-center justify-between">
        <Image
          src="/images/logo-light.svg"
          width={100}
          height={36}
          alt="کلاسبن"
          priority
        />

        <TopNavigation />

        <span className="mr-auto">user</span>
      </nav>
    </header>
  );
};

