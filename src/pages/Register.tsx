import { RegisterForm } from '../components/RegisterForm';

export const Register = () => {
  return (
    <main className='flex w-full items-center justify-center'>
      <RegisterForm onSubmit={(data) => console.log(data)} />
    </main>
  );
};
