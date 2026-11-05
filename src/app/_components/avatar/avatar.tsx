import { AvatarProps } from "@/app/_components/avatar/avatar.type";
import { IconUserProfile } from "@/app/_components/icons/icons";
import { Size } from "@/app/_components/types/size.type";
import classNames from "classnames";
import Image from "next/image";

const sizeClasses: Record<Size, number> = {
  tiny: 50,
  small: 50,
  normal: 70,
  large: 120,
};

const Avatar: React.FC<AvatarProps> = ({
  alt = "",
  clasName,
  size = "normal",
  src,
  variant = "primary",
}: AvatarProps) => {
  const classes = classNames("avatar", clasName, {
    [`avatar-${variant}`]: variant,
    [`${sizeClasses[size]}`]: size,
  });
  return (
    <div
      className={classes}
      style={{ width: sizeClasses[size], height: sizeClasses[size] }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={sizeClasses[size]}
          height={sizeClasses[size]}
        />
      ) : (
        <IconUserProfile
          width={sizeClasses[size] / 2}
          height={sizeClasses[size] / 2}
        />
      )}
    </div>
  );
};
export default Avatar;
