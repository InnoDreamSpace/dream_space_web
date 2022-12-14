import { memo } from 'react';
import { CreateShopDataType } from '../../typings/shop';
import { FormInput } from '../FormInput';
import { RiShoppingCartLine } from 'react-icons/ri';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TbFileDescription } from 'react-icons/tb';
import { GrContact } from 'react-icons/gr';

export type ShopFormProps = {
  initial?: CreateShopDataType;
  onSubmit: (shopData: CreateShopDataType) => void;
};

export const ShopForm = memo(({ initial, onSubmit }: ShopFormProps) => {
  return (
    <div className='text-gray-500 w-max w-3/4 overflow-hidden max-w-[600px] min-w-[300px]'>
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
              name: '',
              description: '',
              contact: '',
              logo: '',
              ...initial,
            }}
            validationSchema={Yup.object({
              name: Yup.string().required('Required'),
              description: Yup.string().required('Required'),
              contact: Yup.string().required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              onSubmit({ ...values });
              setSubmitting(false);
            }}
          >
            {({ setFieldValue }) => (
              <Form encType='multipart/form-data'>
                <div className='flex flex-col'>
                  <FormInput
                    id='shopNameInput'
                    name='name'
                    type='text'
                    placeholder='What is the name of your store?'
                    icon={<RiShoppingCartLine />}
                    className='w-full px-3 mb-5'
                    label='Shop Name'
                  />
                  <FormInput
                    id='shopDescroptionInput'
                    name='description'
                    type='text'
                    placeholder='Tell us about your store'
                    icon={<TbFileDescription />}
                    className='w-full px-3 mb-5'
                    label='Description'
                    multiple
                  />
                  <FormInput
                    id='shopContactInput'
                    name='contact'
                    type='text'
                    placeholder='Phone / email / telegram'
                    icon={<GrContact />}
                    className='w-full px-3 mb-5'
                    label='Contacts'
                  />
                  <FormInput
                    id='shopLogoInput'
                    name='logo'
                    type='file'
                    accept='image/*'
                    value={undefined}
                    onChange={(event) => {
                      console.log(event.currentTarget?.files?.[0]);
                      setFieldValue('logo', event.currentTarget?.files?.[0]);
                    }}
                    icon={<GrContact />}
                    className='w-full px-3 mb-5'
                    label='Logo'
                  />
                </div>

                <div className='flex'>
                  <div className='w-full px-3 mb-8'>
                    <button
                      type='submit'
                      className='block w-full max-w-xs mx-auto bg-brown-700 hover:bg-brown-800 focus:bg-brown-600 text-white rounded-lg px-3 py-3 font-semibold'
                    >
                      Create
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
});

ShopForm.displayName = 'ShopForm';
