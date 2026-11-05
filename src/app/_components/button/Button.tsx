import { ButtonProps, ButtonShape } from "@/app/_components/button/button.types"
import Loading from "@/app/_components/loading/Loading";

import { Size } from "@/app/_components/types/size.type"

import classNames from "classnames"

const sizeClasses:Record<Size,string> = {
  tiny:"btn-xs",
  small:"btn-sm",
  normal:"",
  large:"btn-lg"
};

const shapeClasses:Record<ButtonShape,string> = {
wide:"btn-wide",
full:"btn-block",
square:"btn-square",
default:""
};


const Button:React.FC<ButtonProps> = ({
  variant,
  size="normal",
  isDisabled=false,
  isOutline=false,
  shape="default",
  isLoading=false,
  loadingType="spinner",
  loadingText="در حال ارسال درخواست",
  type="button",
  isLink=false,
  animatedIcon=false,
  clasName="",
  children,
  ...rest
}:ButtonProps) => {
  
  const classes=classNames(
    "btn",
    clasName,
    {"btn-outline":isOutline},
    {"btn-link":isLink},
    {"animated-icon":animatedIcon},
    {"pointer-events-none opacity-80":isLoading},
    {[`btn-${variant}`]:variant},
    {[`${sizeClasses[size]}`]:size},
    {[`${shapeClasses[shape]}`]:shape}

  );


  return (
    <button type={type} disabled={isDisabled} {...rest} className={classes}>
      {isLoading && <Loading type={loadingType}/>}
      {isLoading ? loadingText : children}
    </button>
  )
}

export default Button