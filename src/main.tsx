import React from 'react';
import ReactDOM from 'react-dom/client';
import 'tw-elements';
import { RouterProvider } from 'react-router-dom';
import { router } from './utils/router';
import { store } from './store';
import { Provider as StoreProvider } from 'react-redux';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <RouterProvider router={router} />
    </StoreProvider>
  </React.StrictMode>,
);
