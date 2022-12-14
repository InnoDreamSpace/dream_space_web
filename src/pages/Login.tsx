import { useCallback } from 'react';
import { LoginForm } from '../components/LoginForm';
import { useLoginUserMutation } from '../services/userApi';
import { LoginDataType } from '../typings/auth';
import { Navigate, useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();
  const [loginUser] = useLoginUserMutation();
  const sesionUserData = sessionStorage.getItem('userId');

  const handleUserLogin = useCallback(
    (userData: LoginDataType) => {
      loginUser(userData);
      navigate('/');
    },
    [navigate],
  );

  if (sesionUserData) {
    return <Navigate to={'/'} state={{ from: location }} />;
  }

  return (
    <main className='flex w-full items-center justify-center'>
      <LoginForm onSubmit={handleUserLogin} />
    </main>
  );
};
