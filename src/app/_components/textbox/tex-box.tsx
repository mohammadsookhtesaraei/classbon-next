
// react

import {forwardRef, ForwardRefRenderFunction} from "react";


// types 

import { Size } from "@/app/_components/types/size.type";
import { TextboxProps } from "./textbox.types"


// third lib 
import classNames from "classnames";


// type
const sizeClasses: Record<Size, string> = {
    tiny: "textbox xs",
    small: "textbox sm",
    normal: "textbox md",
    large: "textbox lg",
};


 const TextboxWithoutRef:ForwardRefRenderFunction<HTMLInputElement, TextboxProps> =({variant="ghost",type="text",className,size="normal",...otherProps},ref)=>{
    const classes = classNames(
            "textbox",
            "w-full",
            className,
            {[`textbox ${variant}`]: variant},
            {[`${sizeClasses[size]}`]: size}
        );

    return(
        <>
        <input ref={ref} type={type} className={classes} {...otherProps} />;
        </>
    )
};


const TextBox = forwardRef(TextboxWithoutRef);


export {TextBox};