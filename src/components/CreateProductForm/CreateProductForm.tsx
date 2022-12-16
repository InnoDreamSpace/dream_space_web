import { memo } from 'react';
import { CreateShopDataType } from '../../typings/shop';
import { FormInput } from '../FormInput';
import { RiShoppingCartLine } from 'react-icons/ri';
import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';
import { TbFileDescription } from 'react-icons/tb';
import { GrContact } from 'react-icons/gr';
import { IoMdResize } from 'react-icons/io';
import { MdOutlineCategory } from 'react-icons/md';
import { AiOutlineColumnHeight, AiOutlineColumnWidth } from 'react-icons/ai';
import { BsImages } from 'react-icons/bs';
import { CreateProductType, IProductType } from '../../typings/products';
import { FormSelect } from '../FormSelect';

export type CreateProductFormProps = {
  initial?: IProductType;
  onSubmit: (shopData: CreateProductType) => void;
  innerRef?: React.RefObject<FormikProps<IProductType>>;
};

const options = [
  {
    title: 'Bathroom',
    value: 'BAT',
  },
  {
    title: 'Bedroom',
    value: 'BED',
  },
  {
    title: 'Kitchen',
    value: 'KIT',
  },
  {
    title: 'Living room',
    value: 'LIV',
  },
  {
    title: 'Garden',
    value: 'GAR',
  },
  {
    title: 'Corridor',
    value: 'COR',
  },
  {
    title: 'Other',
    value: 'OTH',
  },
];

export const CreateProductForm = memo(({ initial, onSubmit, innerRef }: CreateProductFormProps) => {
  return (
    <div className='text-gray-500 w-full overflow-hidden min-w-[200px]'>
      <div className='md:flex w-full'>
        <div className='w-full py-4'>
          <Formik
            initialValues={{
              name: initial?.name ?? '',
              description: initial?.description ?? '',
              price: initial?.price ?? 0,
              width: initial?.width ?? 0,
              length: initial?.length ?? 0,
              height: initial?.height ?? 0,
              images: [],
              category: initial?.category ?? '',
              shop_id: '',
              id: '',
              shopId: '',
            }}
            validationSchema={Yup.object({
              name: Yup.string().required('Required'),
              description: Yup.string().required('Required'),
              price: Yup.string().required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore - blob bag
              onSubmit({ ...values });
              setSubmitting(false);
            }}
            innerRef={innerRef}
          >
            {({ setFieldValue }) => (
              <Form encType='multipart/form-data'>
                <div className='flex flex-col'>
                  <FormInput
                    id='productNameInput'
                    name='name'
                    type='text'
                    placeholder="The product's name"
                    icon={<RiShoppingCartLine />}
                    className='w-full px-3 mb-5'
                    label='Product Name'
                  />
                  <FormInput
                    id='productDescroptionInput'
                    name='description'
                    type='text'
                    placeholder='Tell us about your product'
                    icon={<TbFileDescription />}
                    className='w-full px-3 mb-5'
                    label='Description'
                    multiple
                  />
                  <FormInput
                    id='productContactInput'
                    name='price'
                    type='number'
                    placeholder='Price'
                    icon={<GrContact />}
                    className='w-full px-3 mb-5'
                    label='Price (RUB)'
                  />
                  <FormSelect
                    id='productContactInput'
                    name='category'
                    placeholder='Category'
                    icon={<MdOutlineCategory />}
                    className='w-full px-3 mb-5'
                    label='Category'
                    options={options}
                    onChange={(event) => {
                      setFieldValue('category', event.currentTarget?.value);
                    }}
                  />
                  {initial === undefined && (
                    <FormInput
                      id='shopLogoInput'
                      name='images'
                      type='file'
                      accept='image/*'
                      value={undefined}
                      onChange={(event) => {
                        setFieldValue('images', event.currentTarget?.files);
                      }}
                      icon={<BsImages />}
                      className='w-full px-3 mb-5'
                      label='Images'
                      multiple
                    />
                  )}

                  <div className='flex my-3 justify-center'>
                    <div className='w-16 h-1 rounded-full bg-brown-600 inline-flex'></div>
                  </div>
                  <FormInput
                    id='productWidthInput'
                    name='width'
                    type='number'
                    placeholder='Width'
                    icon={<AiOutlineColumnWidth />}
                    className='w-full px-3 mb-5'
                    label='Width (sm)'
                  />
                  <FormInput
                    id='productHeightInput'
                    name='height'
                    type='number'
                    placeholder='Height'
                    icon={<AiOutlineColumnHeight />}
                    className='w-full px-3 mb-5'
                    label='Height (sm)'
                  />
                  <FormInput
                    id='productLenghtInput'
                    name='length'
                    type='number'
                    placeholder='Length'
                    icon={<IoMdResize />}
                    className='w-full px-3 mb-5'
                    label='Length (sm)'
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

CreateProductForm.displayName = 'CreateProductForm';
