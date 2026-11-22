"use client";

import {NotificationToast} from "./notification-toast";
import {useNotificationStore} from "@/stores/notification.store";

export const Notifications: React.FC = () => {
    const notifications = useNotificationStore((state) => state.notifications);
    if (notifications.length < 1) return <></>;

    return (
        <div className="fixed flex flex-col-reverse bottom-3 right-3 gap-3 z-[999]">
            {notifications.map((p) => {
                return (
                    <NotificationToast key={`notification-${p.id}`} notification={p}/>
                );
            })}
        </div>
    );
};

export default Notifications;