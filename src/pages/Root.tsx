import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { navigation } from '../utils/navigation';

export const Root = () => {
  return (
    <>
      <Header {...navigation} />
      <Outlet />
    </>
  );
};
