import { memo } from 'react';
import { LoginDataType } from '../../typings/auth';
import { FormInput } from '../FormInput';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

export type LoginFormProps = {
  loginError?: string;
  onSubmit: (loginData: LoginDataType) => void;
};

export const LoginForm = memo(({ onSubmit }: LoginFormProps) => {
  return (
    <div className='text-gray-500 overflow-hidden w-max'>
      <div className='md:flex w-full'>
        <div className='w-full py-10 px-5 md:px-10'>
          <div className='text-center mb-10'>
            <h1 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
              LOGIN
            </h1>
            <p className='font-medium text-gray-600'>Some awesome text</p>
          </div>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={Yup.object({
              email: Yup.string().email('Invalid email address').required('Required'),
              password: Yup.string().required(),
            })}
            onSubmit={(values, { setSubmitting }) => {
              onSubmit({ ...values });
              setSubmitting(false);
            }}
          >
            <Form>
              <div className='flex'>
                <FormInput
                  id='emailInput'
                  name='email'
                  type='email'
                  placeholder='some@example.com'
                  icon={<AiOutlineMail />}
                  className='w-full px-3 mb-5'
                  label='Email'
                />
              </div>
              <div className='flex'>
                <FormInput
                  id='passwordInput'
                  name='password'
                  type='password'
                  placeholder='************'
                  icon={<AiOutlineLock />}
                  className='w-full px-3 mb-8'
                  label='Password'
                />
              </div>

              <div className='flex w-full justify-center mb-6'>
                <div className='text-sm'>
                  <Link to={'/register'} className='font-medium hover:text-brown-600'>
                    You do not have an account?{' '}
                    <span className='hover:text-brown-600'>Sign up</span>
                  </Link>
                </div>
              </div>

              <div className='flex'>
                <div className='w-full px-3 mb-8'>
                  <button
                    type='submit'
                    className='block w-full px-3 mx-auto bg-brown-700 hover:bg-brown-800 focus:bg-brown-600 text-white rounded-lg px-3 py-3 font-semibold'
                  >
                    LOG IN
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
});

LoginForm.displayName = 'RegisterForm';
