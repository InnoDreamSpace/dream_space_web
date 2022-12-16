import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  useDeleteProductMutation,
  useEditProductMutation,
  useGetProductQuery,
} from '../services/productApi';
import { useAppSelector } from '../hooks/store';
import { productSelector } from '../store/selectors/productSelectors';
import { useGetShopQuery } from '../services/shopApi';
import { shopSelector } from '../store/selectors/shopSelectors';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { userSelector } from '../store/selectors/userSelectors';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import Modal from '../components/Modal/Modal';
import { CreateProductForm } from '../components/CreateProductForm';
import { CreateProductType } from '../typings/products';
import { FormikProps } from 'formik';

export const Product = () => {
  const { productId } = useParams<{ productId?: string }>();
  const navigate = useNavigate();
  useGetProductQuery(Number(productId));

  const [deleteProduct] = useDeleteProductMutation();
  const [editProduct] = useEditProductMutation();

  const [activeImage, setActiveImage] = useState('https://dummyimage.com/400x400');
  const editFormRef = useRef<FormikProps<CreateProductType>>(null);

  const product = useAppSelector(productSelector);
  const user = useAppSelector(userSelector);

  useGetShopQuery(Number(product?.shopId));
  const { data: shop } = useAppSelector(shopSelector);

  const isAdmin = useMemo(() => {
    return user?.shops.some((userShop) => Number(userShop.id) === Number(product?.shopId));
  }, [user, product?.shopId]);

  const handleEditProduct = useCallback(
    (data: any) => {
      if (product?.id) editProduct({ data, productId: Number(product.id) });
    },
    [editProduct, product],
  );

  const handleDelete = useCallback(() => {
    if (product?.id)
      deleteProduct(Number(product?.id)).then(() => navigate(`/shop/${product?.shopId}`));
  }, [product, deleteProduct]);

  useEffect(() => {
    if (product?.images) setActiveImage(product?.images?.[0]);
  }, [product?.images]);

  if (!productId || !product || !product?.shopId) {
    return null;
  }

  return (
    <main className='text-gray-600 body-font overflow-hidden'>
      <div className='container px-5 py-20 mx-auto'>
        <div className='lg:w-4/5 mx-auto flex flex-wrap'>
          <div className='flex flex-col lg:w-1/2 w-full'>
            <img
              alt={product?.name}
              className='flex w-full lg:h-fit h-64 object-cover object-center rounded'
              src={activeImage}
            />
            <div className='flex mt-4 gap-4 w-full h-fit object-cover object-center rounded overflow-hidden'>
              {product?.images
                .filter((image) => image !== activeImage)
                .map((image) => (
                  <img
                    alt={product?.name}
                    key={image}
                    className='w-16 h-auto object-cover object-center rounded'
                    src={image}
                    onClick={() => setActiveImage(image)}
                  />
                ))}
            </div>
          </div>

          <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
            <Link
              is='h2'
              to={`/shop/${shop?.id}`}
              className='text-sm title-font text-gray-500 tracking-widest'
            >
              {product?.shopName}
            </Link>
            <div className='flex justify-between'>
              <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
                {product?.name}
              </h1>
              {isAdmin && (
                <div className='flex gap-2'>
                  <AiOutlineEdit
                    aria-label='Edit product'
                    data-bs-toggle='modal'
                    data-bs-target='#editModal'
                    className='w-6 h-6 text-brown-800 cursor-pointer hover:text-brown-100 active:text-brown-800'
                  />
                  <AiOutlineDelete
                    aria-label='Delete product'
                    data-bs-toggle='modal'
                    data-bs-target='#deleteModal'
                    className='w-6 h-6 text-brown-800 cursor-pointer hover:text-brown-100 active:text-brown-800'
                  />
                </div>
              )}
            </div>

            <p className='leading-relaxed'>{product?.description}</p>

            <div className='flex flex-col mt-6 items-start pb-5 border-b-2 border-gray-100 mb-5'>
              <span className='font-semibold text-xl mt-4 mb-2'>Properties</span>
              <div className='flex items-center'>
                <span className='font-bold mr-2'>Width:</span>
                {product?.width}
              </div>
              <div className='flex items-center'>
                <span className='font-bold mr-2'>Height:</span>
                {product?.height}
              </div>
              <div className='flex items-center'>
                <span className='font-bold mr-2'>Length:</span>
                {product?.length}
              </div>

              <div className='mt-4'>
                <span className='font-semibold text-xl mt-4 mb-2 mr-2'>Shop contacts:</span>
                {shop?.contact}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        modalId='editModal'
        title='Edit shop'
        onOk={() => editFormRef?.current?.handleSubmit()}
        body={
          <CreateProductForm
            onSubmit={handleEditProduct}
            initial={product}
            innerRef={editFormRef}
          />
        }
      />
      <Modal
        modalId='deleteModal'
        title='Delete product'
        okButtonText='Delete'
        onOk={handleDelete}
        body={<div>Do you realy want to delete product?</div>}
      />
    </main>
  );
};
