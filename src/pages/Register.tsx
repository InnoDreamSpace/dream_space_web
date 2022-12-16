import { useCallback } from 'react';
import { RegisterForm } from '../components/RegisterForm';
import { RegisterDataType } from '../typings/auth';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { useRegisterUserMutation } from '../services/userApi';

export const Register = () => {
  const navigate = useNavigate();
  const [registerUser] = useRegisterUserMutation();
  const [searchParams] = useSearchParams();
  const sesionUserData = sessionStorage.getItem('userId');
  const createShopStory = searchParams.get('createShopStory');

  const handleUserRegister = useCallback(
    (userData: RegisterDataType) => {
      registerUser(userData);
    },
    [navigate, createShopStory],
  );

  if (sesionUserData) {
    return <Navigate to={createShopStory ? '/create-shop' : '/'} />;
  }

  return (
    <main className='flex w-full items-center justify-center'>
      <RegisterForm
        onSubmit={handleUserRegister}
        subtitle={
          createShopStory
            ? 'To create a store, you must first create a user account'
            : 'Welcome to DreamSpace!'
        }
      />
    </main>
  );
};
