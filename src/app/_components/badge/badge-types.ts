import { ComponentBase } from "@/app/_components/types/component-base-type";


export type BadgeProps=Omit<ComponentBase,"isDisabled"> & {
    children:React.ReactNode
}