import { createBrowserRouter } from 'react-router-dom';
import { Root, Error, Register } from '../pages';
import { Login } from '../pages/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]);
