import Badge from "@/app/_components/badge/badge"
import { IconToman } from "@/app/_components/icons/icons"
import { PriceProps } from "@/app/_components/price/price-types"
import { Size } from "@/app/_components/types/size.type"

const sizesClasses:Record<Size,{textSize:string,svgSize: number}> ={
tiny:{textSize:"text-md",svgSize:16},
small:{textSize:"text-xl",svgSize:18},
normal:{textSize:"text-2xl",svgSize:20},
large:{textSize:"text-3xl",svgSize:22},
};




const Price:React.FC<PriceProps> = ({
    size="normal",
    clasName,
    text="رایگان",
    price
}:PriceProps) => {

    const svgSize=sizesClasses[size].svgSize
  return (
    <>
    {price != null && price > 0 ? (
        <span className={`flex items-center font-bold gap-1 dark:text-white/99 ${clasName} ${sizesClasses[size]}`}>
         {price.toLocaleString()}
         <IconToman strokeWidth={1} viewBox="0 0 16 16" width={svgSize} height={svgSize}/>
        </span>
    ):(<Badge variant="success" size="small">
        {text}
    </Badge>)}
    </>
  )
}

export default Price