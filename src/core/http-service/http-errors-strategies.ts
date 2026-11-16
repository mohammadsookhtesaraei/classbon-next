// ایمپورت تایپ ها
import {
  ApiError,
  BadRequestError,
  NetworkError,
  NotFoundError,
  UnauthorizedError,
  UnhandledException,
  ValidationError,
} from "@/types/http-errors.interface";

// تعریف Type تابع مدیریت خطا؛ ورودی آن اطلاعات خطای API است
export type ApiErrorHandler = (errorData: ApiError) => void;

// Strategy مربوط به خطای Bad Request (400)
export const badRequestErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData, // کپی اطلاعات خطای دریافتی از سرور
  } as BadRequestError; // مشخص کردن Type خطا
};

// Strategy مربوط به خطای Validation (400)
export const validationErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData, // کپی اطلاعات خطای دریافتی از سرور
  } as ValidationError;
};

// Strategy مربوط به خطای Not Found (404)
export const notFoundErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData, // کپی اطلاعات خطای دریافتی از سرور
    detail: "سرویس یافت نشد", // جایگزینی پیام خطای دریافتی
  } as NotFoundError;
};

// Strategy مربوط به خطای Unauthorized (403)
export const unauthorizedErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
    detail: "دسترسی به سرویس امکان‌پذیر نیست",
  } as UnauthorizedError;
};

// Strategy مربوط به خطای داخلی سرور (500)
export const unhandledExceptionStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
    detail: "خطای سرور",
  } as UnhandledException;
};

// Strategy مربوط به خطای Network
export const networkErrorStrategy = () => {
  throw {
    detail: "خطای شبکه",
  } as NetworkError;
};

// Mapping کردن HTTP Status Codeها به Strategy مربوط به هر خطا
export const errorHandler: Record<number, ApiErrorHandler> = {
  // اگر Status Code برابر 400 باشد، نوع خطا را بررسی می‌کنیم
  400: (errorData) =>
    // وجود errors نشان‌دهنده Validation Error است
    (errorData.errors ? validationErrorStrategy : badRequestErrorStrategy)(
      errorData
    ),

  // مدیریت خطای عدم دسترسی
  403: unauthorizedErrorStrategy,

  // مدیریت خطای پیدا نشدن منبع درخواستی
  404: notFoundErrorStrategy,

  // مدیریت خطای داخلی سرور
  500: unhandledExceptionStrategy,
};