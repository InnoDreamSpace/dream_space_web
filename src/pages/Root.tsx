import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { navigation } from '../utils/navigation';
import { useCallback, useEffect } from 'react';
import { useGetUserMutation } from '../services/userApi';
import { userSelector } from '../store/selectors/userSelectors';
import { useAppSelector, useAppDispatch } from '../hooks/store';
import { logout } from '../store/userSlice';

export const Root = () => {
  const [getUser, getUserRequest] = useGetUserMutation();
  const user = useAppSelector(userSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const sesionUserData = sessionStorage.getItem('userId');
    if (
      !isNaN(Number(sesionUserData)) &&
      sesionUserData !== null &&
      user === undefined &&
      !getUserRequest.isLoading
    ) {
      getUser(Number(sesionUserData));
    }
  }, [user, getUserRequest]);

  const handleLogout = useCallback(() => {
    sessionStorage.removeItem('userId');
    dispatch(logout());
  }, [dispatch, logout]);

  return (
    <>
      <Header {...navigation} user={user} onLogout={handleLogout} />
      <Outlet />
    </>
  );
};
