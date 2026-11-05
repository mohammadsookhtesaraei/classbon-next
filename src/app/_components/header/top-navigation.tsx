"use client";
// next import
import Link from "next/link";
import { usePathname } from "next/navigation";

// constant data
import { menuItems } from "@/constants/menuItems";
import classNames from "classnames";

const TopNavigation = () => {


  const pathname = usePathname();

  return (
    <ul className="hidden lg:flex gap-x-8 mr-12">
      {menuItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <li key={`navigation-${item.href}`}>
            <Link
              href={item.href}
              className={classNames(
                "dark:hover:text-primary transition-colors pb-2",
                {
                  "border-b-2 dark:text-primary dark:border-primary/30":
                    isActive,
                },
              )}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default TopNavigation;
