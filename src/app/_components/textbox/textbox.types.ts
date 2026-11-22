import {InputHTMLAttributes} from "react";

import { ComponentBase } from "@/app/_components/types/component-base-type";

type TextboxType = "text" | "number" | "email" | "password";

export type TextboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & ComponentBase & {
    type?: TextboxType
}