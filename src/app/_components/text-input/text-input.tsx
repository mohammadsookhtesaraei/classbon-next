import { FieldError, FieldValues, get } from "react-hook-form";
import { TextInputProps } from "./textinput.types";

import { TextBox } from "@/app/_components/textbox";

export const TextInput = <TFormValues extends FieldValues>({
  name,
  register,
  errors,
  variant,
  ...rest
}: TextInputProps<TFormValues>) => {
    const error=get(errors, name) as FieldError | undefined;;
  return (
        <div>
      <TextBox
        {...register(name)}
        variant={!!error ? "error" : variant}
        {...rest}
      />
      {!!error && <p className="mt-2 text-sm text-error">{error.message}</p>}
    </div>
  )
};
