import { memo } from 'react';
import { ShopDataType } from '../../typings/shop';
import { FormInput } from '../FormInput';
import { RiShoppingCartLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

export type ShopFormProps = {
  onSubmit: (shopData: ShopDataType) => void;
};

export const ShopForm = memo(({ onSubmit }: ShopFormProps) => {
  return (
    <div className='text-gray-500 w-max overflow-hidden'>
      <div className='md:flex w-full'>
        <div className='w-full py-10 px-5 md:px-10'>
          <div className='text-center mb-10'>
            <h1 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
              Create Your Shop
            </h1>
            <p className='font-medium text-gray-600'>Some awesome text</p>
          </div>
          <Formik
            initialValues={{
              shopName: '',
            }}
            validationSchema={Yup.object({
              shopName: Yup.string().required('Required'),
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
              <div className='flex'>
                <FormInput
                  id='shopNameInput'
                  name='shopName'
                  type='text'
                  placeholder='Awesome shop'
                  icon={<RiShoppingCartLine />}
                  className='w-full px-3 mb-5'
                  label='Shop Name'
                />
              </div>

              <div className='flex'>
                <div className='w-full px-3 mb-8'>
                  <button
                    type='submit'
                    className='block w-full max-w-xs mx-auto bg-brown-700 hover:bg-brown-800 focus:bg-brown-600 text-white rounded-lg px-3 py-3 font-semibold'
                  >
                    Continue
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

ShopForm.displayName = 'ShopForm';
