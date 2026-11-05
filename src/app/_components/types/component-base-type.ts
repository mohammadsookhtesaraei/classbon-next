import { Variant } from "./variant.type"
import { Size } from "./size.type"


export type ComponentBase= {
isDisabled?:boolean,
clasName?:string,
variant?:Variant,
size?: Size
}