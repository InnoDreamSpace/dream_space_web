import { memo } from 'react';
import { CreateShopDataType } from '../../typings/shop';
import { FormInput } from '../FormInput';
import { RiShoppingCartLine } from 'react-icons/ri';
import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';
import { TbFileDescription } from 'react-icons/tb';
import { GrContact } from 'react-icons/gr';

export type ShopFormProps = {
  initial?: CreateShopDataType;
  onSubmit: (shopData: CreateShopDataType) => void;
  innerRef?: React.RefObject<FormikProps<CreateShopDataType>>;
};

export const EditShopForm = memo(({ initial, onSubmit, innerRef }: ShopFormProps) => {
  return (
    <div className='text-gray-500 w-full overflow-hidden min-w-[200px]'>
      <div className='md:flex w-full'>
        <div className='w-full py-4'>
          <Formik
            initialValues={{
              name: initial?.name ?? '',
              description: initial?.description ?? '',
              contact: initial?.contact ?? '',
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
            innerRef={innerRef}
          >
            {() => (
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
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
});

EditShopForm.displayName = 'EditShopForm';
