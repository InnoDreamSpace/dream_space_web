import { LoginForm } from '../components/LoginForm';

export const Login = () => {
  return (
    <main className='flex w-full items-center justify-center'>
      <LoginForm onSubmit={(data) => console.log(data)} />
    </main>
  );
};
