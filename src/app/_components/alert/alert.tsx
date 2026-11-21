import { AlertProps } from "./alert.types";
import classNames from "classnames";
import IconInfo from "../icons/src/info";

const Alert: React.FC<AlertProps> = ({
  variant,
  showIcon = true,
  children,
  className,
}) => {
  const classes = classNames(
    "alert",
    { [`alert ${variant}`]: variant },
    className,
  );
  return (
    <div className={classes}>
      {showIcon && <IconInfo width={18} />}
      {children}
    </div>
  );
};

export default Alert;
