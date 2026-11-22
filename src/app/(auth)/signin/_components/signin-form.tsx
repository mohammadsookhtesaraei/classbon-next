"use client";

// next 

import {useRouter} from "next/navigation";

// react

import {useActionState, useEffect, useTransition} from "react";

// type
import { SignIn } from "../_types/signin.interface";
// schema 
import { SignInSchema } from "../_types/signin.schema";

// third lib
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod";


// component
import Button from "@/app/_components/button/Button";
import { TextInput } from "@/app/_components/text-input";

// custom hook react query mutation
import { useSignIn } from "@/app/(auth)/signin/_api/signin";


// zustand


const SignInForm = () => {
const router=useRouter();
  const {
    register,
    handleSubmit,
    formState:{errors,isValid},
    getValues
  }=useForm<SignIn>({
    resolver:zodResolver(SignInSchema)
  });

  const singIn=useSignIn({
    onSuccess:()=>{
    router.push(`/verify?mobile=${getValues('mobile')}`)
    }
  });

  const onSubmit=(data:SignIn)=>{
  singIn.submit(data);
  }
  return (
    <>
      <h5 className="text-2xl">ورود | ثبت نام</h5>
      <p className="mt-2">دنیای شگفت انگیز برنامه نویسی در انتظار شماست!</p>
      <form className="flex flex-col gap-6 mt-16" onSubmit={handleSubmit(onSubmit)}>
        <TextInput<SignIn> register={register} name={"mobile"} errors={errors}/>
        <Button type="submit" variant="primary" isLoading={singIn.isPending}> تایید و دریافت کد</Button>
      </form>
    </>
  );
};
export default SignInForm;
