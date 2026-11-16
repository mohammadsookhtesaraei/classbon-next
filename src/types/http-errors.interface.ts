// ساختار پایه برای تمام خطاهای 
// API
interface Problem {
  title: string; // عنوان خطا
  status: number; // کد وضعیت HTTP
  detail?: string; // توضیحات بیشتر درباره خطا
  errors?: Record<string, string[]>; // خطاهای اعتبارسنجی فیلدها
}

// خطای درخواست نامعتبر (400)
interface BadRequestError extends Problem {}

// خطای عدم احراز هویت یا دسترسی (403)
interface UnauthorizedError extends Problem {}

// خطای اعتبارسنجی داده‌های ارسالی (400)
interface ValidationError extends Problem {}

// خطای پیدا نشدن منبع درخواستی (404)
interface NotFoundError extends Problem {}

// خطای داخلی و مدیریت‌نشده سرور (500)
interface UnhandledException extends Problem {}

// خطای شبکه یا عدم برقراری ارتباط با سرور
interface NetworkError extends Problem {}

// نوع ترکیبی برای پوشش تمام خطاهای احتمالی API
type ApiError =
  | BadRequestError
  | NetworkError
  | UnhandledException
  | UnauthorizedError
  | NotFoundError
  | ValidationError;

// خروجی گرفتن از Typeها و Interfaceها برای استفاده در فایل‌های دیگر
export type {
  Problem,
  BadRequestError,
  UnauthorizedError,
  ValidationError,
  NotFoundError,
  UnhandledException,
  NetworkError,
  ApiError,
};