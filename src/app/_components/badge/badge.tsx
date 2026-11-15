import { BadgeProps } from "@/app/_components/badge/badge-types"
import { Size } from "@/app/_components/types/size.type";
import classNames from "classnames"

const sizeClasses:Record<Size,string> = {
  tiny:"badge-xs",
  small:"badge-sm",
  normal:"badge-md",
  large:"badge-lg"
};

const Badge:React.FC<BadgeProps> = ({variant,className,size="tiny",children}:BadgeProps) => {
    const classes=classNames(
        "badge",
        className,
        {[`badge-${variant}`]:variant},
        {[`${sizeClasses[size]}`]:size}
    )
  return (
    <span className={classes}>
        {children}
    </span>
  )
}

export default Badge