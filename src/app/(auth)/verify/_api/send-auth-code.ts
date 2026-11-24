import { useMutation } from "@tanstack/react-query";
import { createData } from "@/core/http-service/http-service";

export const SendAuthCode = (userName: string): Promise<any> => {
    return createData("/send-auth-code", { userName })
};



type UseSendAuthCodeOptions = {
    onSuccess?: () => void
};


export const useSendAuthCode = ({ onSuccess }: UseSendAuthCodeOptions) => {
    const { mutate: submit, isPending } = useMutation({
        mutationFn: SendAuthCode,
        onSuccess: onSuccess
    });

    return { submit, isPending }
}