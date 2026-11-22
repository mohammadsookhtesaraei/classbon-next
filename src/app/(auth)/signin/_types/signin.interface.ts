import {z} from "zod";

import { SignInSchema } from "./signin.schema";


export type SignIn =z.infer<typeof SignInSchema>