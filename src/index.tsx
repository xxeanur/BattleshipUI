import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { Theme } from './app/context/theme/theme';
import { Localization } from './app/context/localization/localization'
import { NotificationProvider } from './app/context/notification/notificationContext';
import Notification from './app/context/notification/notification';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Theme>
      <Localization>
        <NotificationProvider>
          <App />
          <Notification />
        </NotificationProvider>
      </Localization>
    </Theme>
  </BrowserRouter>

);

