"use client"

// next

import Link from "next/link";
import { useSearchParams } from "next/navigation";

// react

import {useActionState, useEffect, useMemo, useRef, useState, useTransition} from "react";

// third lib 

import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

// components

import Button from "@/app/_components/button/Button";

// store from-zustand
import {useNotificationStore} from "@/stores/notification.store"


const VerificationForm = () => {
  return (
    <div>VerificationForm</div>
  )
}
export default VerificationForm