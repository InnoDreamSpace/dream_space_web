import { createBrowserRouter } from 'react-router-dom';
import { Root, Error, Register, Login, Products, Shop, Product, About } from '../pages';

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
          path: 'about',
          element: <About />,
        },
        {
          path: 'register',
          element: <Register />,
        },
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: 'shop/:shopId',
          element: <Shop />,
        },
        {
          path: 'product/:productId',
          element: <Product />,
        },
      ],
    },
  ],
  { basename: '/dream_space_web/' },
);
