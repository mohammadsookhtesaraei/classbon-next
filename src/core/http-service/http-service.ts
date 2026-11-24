// Import کردن آدرس اصلی API
import { API_URL } from "@/configs/global";

// Import
//  کردن 
// Type مربوط به خطاهای API
import { ApiError } from "@/types/http-errors.interface";

// Import کردن Axios و Typeهای موردنیاز آن
import axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";

// Import کردن Strategyهای مدیریت خطا
import { errorHandler, networkErrorStrategy } from "./http-errors-strategies";

// ساخت یک Axios Instance با تنظیمات پیش‌فرض
const httpService = axios.create({
  baseURL: API_URL, // تعیین Base URL برای تمام درخواست‌ها
  headers: {
    "Content-Type": "application/json", // مشخص کردن فرمت داده‌های ارسالی
  },
});

// ثبت Response Interceptor برای مدیریت پاسخ‌ها و خطاهای سرور
httpService.interceptors.response.use(
  (response) => {
    // در صورت موفقیت درخواست، همان Response را برمی‌گرداند
    return response;
  },
  (error) => {
    // بررسی وجود Response؛ یعنی سرور پاسخی برگردانده است
    if (error?.response) {
      // استخراج HTTP Status Code از پاسخ سرور
      const statusCode = error?.response?.status;

      // بررسی اینکه Status Code نشان‌دهنده خطا باشد
      if (statusCode >= 400) {
        // دریافت اطلاعات خطا از Body پاسخ سرور
        const errorData: ApiError = error.response?.data;

        // انتخاب و اجرای Strategy متناسب با Status Code
        errorHandler[statusCode](errorData);
      }
    } else {
      // در صورت نبود Response، اجرای Strategy مربوط به خطای شبکه
      networkErrorStrategy();
    }
  }
);

// تابع پایه برای ارسال درخواست‌های HTTP با قابلیت Generic
async function apiBase<T>(
  url: string,
  option?: AxiosRequestConfig
): Promise<T> {
  // ارسال درخواست با Axios و دریافت Response
  const response: AxiosResponse = await httpService(url, option);

  // استخراج Data از Response و تبدیل Type آن به T
  return response.data as T;
}

// تابع دریافت اطلاعات با متد GET
async function readData<T>(
  url: string,
  headers?: AxiosRequestHeaders
): Promise<T> {
  // ساخت تنظیمات درخواست GET
  const options: AxiosRequestConfig = {
    headers: headers, // ارسال Headerهای دلخواه
    method: "GET", // تعیین HTTP Method
  };

  // ارسال درخواست و برگرداندن اطلاعات با Type مشخص‌شده
  return await apiBase<T>(url, options);
}

// تابع ارسال اطلاعات جدید با متد POST
async function createData<TModel, TResult>(
  url: string,
  data: TModel,
  headers?: AxiosRequestHeaders
): Promise<TResult> {
  // ساخت تنظیمات درخواست POST
  const options: AxiosRequestConfig = {
    method: "POST",
    headers: headers,
    data: JSON.stringify(data), // تبدیل داده‌ها به JSON String
  };

  // ارسال درخواست و دریافت نتیجه با Type مشخص‌شده
  return await apiBase<TResult>(url, options);
}

// تابع به‌روزرسانی اطلاعات با متد PUT
async function updateData<TModel, TResult>(
  url: string,
  data: TModel,
  headers?: AxiosRequestHeaders
): Promise<TResult> {
  // ساخت تنظیمات درخواست PUT
  const options: AxiosRequestConfig = {
    method: "PUT",
    headers: headers,
    data: JSON.stringify(data), // تبدیل داده‌ها به JSON String
  };

  // ارسال درخواست و دریافت نتیجه با Type مشخص‌شده
  return await apiBase<TResult>(url, options);
}

// تابع حذف اطلاعات با متد DELETE
async function deleteData<T>(
  url: string,
  headers?: AxiosRequestHeaders
): Promise<void> {
  // ساخت تنظیمات درخواست DELETE
  const options: AxiosRequestConfig = {
    method: "DELETE",
    headers: headers,
  };

  // ارسال درخواست حذف
  return await apiBase(url, options);
}

// Export کردن توابع برای استفاده در سایر بخش‌های پروژه
export { createData, readData, updateData, deleteData };


export const httpServices = {
    get: readData,
    put: updateData,
    delete: deleteData,
    post: createData,
}

