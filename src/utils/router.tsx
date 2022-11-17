import { createBrowserRouter } from 'react-router-dom';
import { Root, Error, Register, Login, Products } from '../pages';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          path: '',
          element: <Products />,
        },
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
  ],
  { basename: '/dream_space_web/' },
);
