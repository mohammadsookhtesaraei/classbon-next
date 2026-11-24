import { showNotifications } from "@/stores/notification.store";
import { Problem } from "@/types/http-errors.interface";
import { Notification } from "@/types/notification.interface";
import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";

export const queryClient=new QueryClient({
    queryCache: new QueryCache({
    onError:(error)=>{
        // show notification
    }
    }),

    mutationCache:new MutationCache({
        onError:(error:unknown)=>{
          handleEror(error as Problem)
        }
    }),

    defaultOptions:{
        queries:{
            retry:false,
            refetchOnWindowFocus:false,
            throwOnError: false,
            gcTime:1000 * 60 * 60 * 60,/* 24 hour  کش و نگه میداره در کلاینت*/
        }
    }
});



const handleEror=(problem:Problem)=>{
    const notifications:Omit<Notification,"id">[] =[];
    if(problem?.errors){
    Object.entries(problem.errors).forEach(([_, values]) =>
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
            values.forEach((errorMessage) =>
                notifications.push({
                    message: errorMessage,
                    type: "error",
                })
            )
        );
    }
    else if(problem?.detail){
        notifications.push({
            message: problem.detail,
            type: "error",
        });
    }

      showNotifications(notifications);


}