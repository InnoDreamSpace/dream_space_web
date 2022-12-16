import { createBrowserRouter } from 'react-router-dom';
import {
  Root,
  Error,
  Register,
  Login,
  Products,
  Shop,
  Product,
  About,
  Favorite,
  CreateShop,
  Home,
  Shops,
} from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'products',
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
        path: 'favorite',
        element: <Favorite />,
      },
      {
        path: 'shops',
        element: <Shops />,
      },
      {
        path: 'shop/:shopId',
        element: <Shop />,
      },
      {
        path: 'product/:productId',
        element: <Product />,
      },
      {
        path: 'create-shop',
        element: <CreateShop />,
      },
    ],
  },
]);
