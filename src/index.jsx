import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';

import store from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </React.StrictMode>,
);
