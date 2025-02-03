import React, { createContext, useContext, useState, ReactNode } from 'react'

interface Notification {//bildirim yapısı
    message: string;
    type: "success" | "error" | "warning" | "info";
}

interface NotificationProps {
    children?: ReactNode;
}

const notificationContext = createContext({
    notification: null as Notification | null,
    showNotification: (message: string, type: Notification["type"]) => { },
    hideNotification: () => { }
});

const useNotificationContext = () => useContext(notificationContext);

function NotificationProvider({ children }: NotificationProps) {
    const [notification, setNotification] = useState<Notification | null>(null);

    const showNotification = (message: string, type: Notification["type"]) => {
        setNotification({ message, type });

        setTimeout(() => {
            setNotification(null);
        }, 3000)
    }

    const hideNotification = () => {
        setNotification(null);
    }

    return (
        <notificationContext.Provider value={{ notification, showNotification, hideNotification }}>
            {children}
        </notificationContext.Provider>
    );

}

export { NotificationProvider, useNotificationContext };