import { LoadingProps } from "./loading.types";
import { Size } from "../types/size.type";

import classNames from "classnames";

const sizeClasses: Record<Size, string> = {
  tiny: "loading-xs",
  small: "loading-sm",
  normal: "loading-md",
  large: "loading-lg",
};

const Loading: React.FC<LoadingProps> = ({
  type = "spinner",
  size = "normal",
  variant,
  className,
}: LoadingProps) => {
  const classes = classNames(
    "loading",
    className,
    { [`loading-${type}`]: type },
    { [`${sizeClasses[size]}`]: size },
    { [`loading-${variant}`]: variant },
  );
  return <span className={classes}></span>;
};

export default Loading;
