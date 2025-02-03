import React from 'react'
import {useNotificationContext} from '../notification/notificationContext'
 import {notificationStyles} from '../notification/style';

 const Notification: React.FC = () => {
    const { notification } = useNotificationContext();
  
    if (!notification) return null;
  
    const style = {
      ...notificationStyles.base,
      ...notificationStyles[notification.type],
    };
  
    return <div style={style}>{notification.message}</div>;
  };
  
  export default Notification;