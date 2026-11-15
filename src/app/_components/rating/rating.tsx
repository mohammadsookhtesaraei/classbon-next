import { IconStar } from "@/app/_components/icons/icons";


import { RatingProps } from "@/app/_components/rating/rating.types";
import { Size } from "@/app/_components/types/size.type";

const sizeClasses: Record<Size, number> = {
  tiny: 14,
  small: 18,
  normal: 24,
  large: 30,
};
export const rating = ({
  rate,
  clasName,
  size = "normal",
  variant = "warning",
}: RatingProps) => {
  return (
    <div className={`flex gap-1 ${clasName}`}>
      {[1, 2, 3, 4, 5].map((index) => (
        <IconStar
          key={`star-${index}`}
          width={sizeClasses[size]}
          height={sizeClasses[size]}
          fill={rate >= index ? `var(--color-${variant})` : ""}
          color={rate >= index ? `var(--color-${variant})` : "currentColor"}
        />
      ))}
    </div>
  );
};
