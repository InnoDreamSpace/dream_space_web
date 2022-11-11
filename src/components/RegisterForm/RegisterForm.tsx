import { memo } from 'react';
import { RegisterDataType } from '../../typings/auth';
import { FormInput } from '../FormInput';
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

export type RegisterFormProps = {
  onSubmit: (registerData: RegisterDataType) => void;
};

export const RegisterForm = memo(({ onSubmit }: RegisterFormProps) => {
  return (
    <div className='text-gray-500 w-max overflow-hidden'>
      <div className='md:flex w-full'>
        <div className='w-full py-10 px-5 md:px-10'>
          <div className='text-center mb-10'>
            <h1 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
              REGISTER
            </h1>
            <p className='font-medium text-gray-600'>Some awesome text</p>
          </div>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
            }}
            validationSchema={Yup.object({
              firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
              lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
              email: Yup.string().email('Invalid email address').required('Required'),
              password: Yup.string().min(8, 'Must be 8 characters or more').required(),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                onSubmit({ ...values });
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form>
              <div className='flex max-sm:flex-col'>
                <FormInput
                  id='firstName'
                  name='firstName'
                  type='text'
                  placeholder='First name'
                  icon={<AiOutlineUser />}
                  className='w-1/2 px-3 mb-5 max-sm:w-full'
                  label='First name'
                />
                <FormInput
                  id='lastName'
                  name='lastName'
                  type='text'
                  placeholder='Last name'
                  icon={<AiOutlineUser />}
                  className='w-1/2 px-3 mb-5 max-sm:w-full'
                  label='Last name'
                />
              </div>
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
                  <Link to={'/login'} className='font-medium hover:text-indigo-500'>
                    Already have an account? Login
                  </Link>
                </div>
              </div>

              <div className='flex'>
                <div className='w-full px-3 mb-8'>
                  <button
                    type='submit'
                    className='block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold'
                  >
                    REGISTER NOW
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

RegisterForm.displayName = 'RegisterForm';
