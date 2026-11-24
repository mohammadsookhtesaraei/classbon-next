'use server';

import {OperationResult} from "@/types/operation-result.types";
import {serverActionWrapper} from "../server-action-wrapper";
import {httpServices} from "@/core/http-service/http-service";
import {SignIn} from "@/app/(auth)/signin/_types/signin.interface";
import {Problem} from "@/types/http-errors.interface";
import {signIn, signOut} from "@/auth";

export async function signInAction(formState: OperationResult<string> | null, formData: FormData) {
    const mobile = formData.get('mobile') as string;

    return serverActionWrapper<string>(async () => await httpServices.post<SignIn, string>("/signin", {mobile: mobile}));
}

export async function sendAuthCode(formState: OperationResult<string> | null, data: SignIn) {
    return serverActionWrapper<string>(async () => await httpServices.post<SignIn, string>("/send-auth-code", data))
}

export async function verify(state: Problem | undefined, formData: FormData) {
    try {
        await signIn('credentials', formData)
    } catch (error) {
        console.log(error)
        return {
            status: 0,
            title: "",
        } satisfies Problem
    }
}

export async function logout() {
    try {
        await signOut()
    } catch (error) {
        //     TODO:better error handling
        console.error(error);
    }
}