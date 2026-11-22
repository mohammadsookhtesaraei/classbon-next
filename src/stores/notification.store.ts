import { create } from "zustand";
import { Notification } from "@/types/notification.interface"
import { v4 as uuidv4 } from 'uuid';


type NotificationStore = {
    notifications: Notification[],
    showNotification: (notifications: Omit<Notification, "id">) => void,
    dismissNotification: (id: string) => void
};


export const useNotificatioStore = create<NotificationStore>((set, get) => ({
    notifications: [],
    showNotification: (notification) => {
        const id = uuidv4();
        set((state) => ({
            notifications: [...state.notifications, { ...notification, id: id }]
        }))

        setTimeout(() => {
            get().dismissNotification(id)
        }, 5000)
    },
    dismissNotification(id) {
        set((state) => ({
            notifications: state.notifications.filter((p) => p.id !== id)
        }))
    },
}))



