import { ProductsList } from '../components/ProductsList';
import { useNavigate, useParams } from 'react-router-dom';
import { useDeleteShopMutation, useEditShopMutation, useGetShopQuery } from '../services/shopApi';
import { useAppSelector } from '../hooks/store';
import { userSelector } from '../store/selectors/userSelectors';
import { useCallback, useMemo, useRef } from 'react';
import { AiOutlineEdit, AiOutlineAppstoreAdd, AiOutlineDelete } from 'react-icons/ai';
import Modal from '../components/Modal/Modal';
import { EditShopForm } from '../components/EditShopForm';
import { FormikProps } from 'formik';
import { CreateShopDataType } from '../typings/shop';
import { shopSelector } from '../store/selectors/shopSelectors';
import { CreateProductForm } from '../components/CreateProductForm';
import Avatar from 'react-avatar';
import { useCreateProductMutation, useGetShopProductsQuery } from '../services/productApi';
import { CreateProductType } from '../typings/products';

export const Shop = () => {
  const { shopId } = useParams<{ shopId?: string }>();

  useGetShopQuery(Number(shopId), { refetchOnMountOrArgChange: true });
  useGetShopProductsQuery(Number(shopId), { refetchOnMountOrArgChange: true });

  const { data: shop, products } = useAppSelector(shopSelector);
  const [editShop] = useEditShopMutation();
  const [createProduct] = useCreateProductMutation();
  const [deleteShop] = useDeleteShopMutation();
  const user = useAppSelector(userSelector);
  const navigate = useNavigate();
  const editFormRef = useRef<FormikProps<CreateShopDataType>>(null);
  const createFormRef = useRef<FormikProps<CreateProductType>>(null);

  const isAdmin = useMemo(() => {
    return user?.shops.some((userShop) => Number(userShop.id) === Number(shopId));
  }, [user, shopId]);

  const handleEditShop = useCallback(
    (data: CreateShopDataType) => {
      if (shopId) {
        editShop({ shopId: Number(shopId), data });
      }
    },
    [shopId],
  );

  const handleDelete = useCallback(() => {
    if (shop?.id) deleteShop(Number(shop?.id)).then(() => navigate('/shops'));
  }, [shop, deleteShop]);

  const handleCreateProduct = useCallback(
    (data: CreateProductType) => {
      const formData = new FormData();
      formData.append('shop', shopId!);
      formData.append('name', data.name);
      formData.append('description', data.description);
      formData.append('price', String(data.price));
      formData.append('category', data.category);
      formData.append('length', String(data.length));
      formData.append('width', String(data.width));
      formData.append('height', String(data.height));

      if (data.images) {
        for (let i = 0; i < data.images.length; ++i) {
          formData.append('images', data.images[i], data.images[i].name);
        }
      }

      createProduct(formData);
    },
    [createProduct, shopId],
  );

  if (!shopId || !shop) {
    return null;
  }

  return (
    <main className='flex w-full items-center justify-center flex-col mx-auto max-w-2xl lg:max-w-7xl'>
      <div className='flex w-full justify-between items-center mt-6'>
        <div className='flex items-center gap-4 w-full px-4 sm:px-6 lg:px-8 max-sm:flex-col'>
          <div className='aspect-square w-20 overflow-hidden rounded-lg bg-gray-200 max-sm:self-start'>
            {shop?.logo ? (
              <img
                src={shop.logo}
                alt={shop?.name}
                className='h-full w-full object-cover object-center hover:opacity-75'
              />
            ) : (
              <Avatar
                name={shop.name}
                className='h-full w-full object-cover object-center hover:opacity-75'
                size='5rem'
              />
            )}
          </div>
          <div className='flex w-full'>
            <h1 className='text-3xl font-bold tracking-tight text-gray-700 lg:max-w-7xl'>
              {shop?.name}
            </h1>

            {isAdmin && (
              <div className='flex gap-2 ml-auto'>
                <AiOutlineEdit
                  aria-label='Edit shop'
                  data-bs-toggle='modal'
                  data-bs-target='#editModal'
                  className='w-6 h-6 text-brown-800 cursor-pointer hover:text-brown-100 active:text-brown-800'
                />
                <AiOutlineAppstoreAdd
                  aria-label='Add product'
                  data-bs-toggle='modal'
                  data-bs-target='#createModal'
                  className='w-6 h-6 text-brown-800 cursor-pointer hover:text-brown-100 active:text-brown-800'
                />
                <AiOutlineDelete
                  aria-label='Delete shop'
                  data-bs-toggle='modal'
                  data-bs-target='#deleteModal'
                  className='w-6 h-6 text-brown-800 cursor-pointer hover:text-brown-100 active:text-brown-800'
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <p className='text-base leading-relaxed tracking-tight w-full mt-4 text-gray-500 px-4 sm:px-6 lg:px-8 '>
        <span className='font-semibold mr-2'>Description:</span>
        {shop?.description}
      </p>
      <p className='text-base leading-relaxed tracking-tight w-full mt-2 text-gray-500 px-4 sm:px-6 lg:px-8 '>
        <span className='font-semibold mr-2'>Contacts:</span>
        {shop?.contact}
      </p>
      <div className='flex mt-6 justify-center'>
        <div className='w-16 h-1 rounded-full bg-brown-600 inline-flex'></div>
      </div>
      <div className='flex justify-center'>
        {products?.length ? (
          <ProductsList
            items={products}
            className='py-8 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8'
            shopList
          />
        ) : (
          <h2 className='font-semibold my-12'>There are no products in this store yet...</h2>
        )}
      </div>
      <Modal
        modalId='editModal'
        title='Edit shop'
        onOk={() => editFormRef?.current?.handleSubmit()}
        body={<EditShopForm onSubmit={handleEditShop} initial={shop} innerRef={editFormRef} />}
      />
      <Modal
        modalId='createModal'
        title='Add new product'
        onOk={() => createFormRef?.current?.handleSubmit()}
        body={<CreateProductForm onSubmit={handleCreateProduct} innerRef={createFormRef} />}
      />
      <Modal
        modalId='deleteModal'
        title='Delete shop'
        okButtonText='Delete'
        onOk={handleDelete}
        body={<div>Do you really want to delete your shop?</div>}
      />
    </main>
  );
};
