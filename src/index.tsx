import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { Theme } from './app/context/theme/theme';
import {Localization} from './app/context/localization/localization'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Theme>
    <Localization>
      <App />
      </Localization>
    </Theme>
  </BrowserRouter>

);

