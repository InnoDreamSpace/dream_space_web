import { useCallback } from 'react';
import { RegisterForm } from '../components/RegisterForm';
import { RegisterDataType } from '../typings/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../services/userApi';

export const Register = () => {
  const navigate = useNavigate();
  const [registerUser] = useRegisterUserMutation();
  const sesionUserData = sessionStorage.getItem('userId');

  const handleUserRegister = useCallback(
    (userData: RegisterDataType) => {
      registerUser(userData);
      navigate('/');
    },
    [navigate],
  );

  if (sesionUserData) {
    return <Navigate to={'/'} state={{ from: location }} />;
  }

  return (
    <main className='flex w-full items-center justify-center'>
      <RegisterForm onSubmit={handleUserRegister} />
    </main>
  );
};
