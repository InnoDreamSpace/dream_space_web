import React, { useCallback } from 'react';
import { ShopForm } from '../components/ShopForm';
import { Navigate, useNavigate } from 'react-router-dom';
import { CreateShopDataType } from '../typings/shop';
import { useCreateShopMutation } from '../services/shopApi';
import { useAppSelector } from '../hooks/store';
import { userSelector } from '../store/selectors/userSelectors';

export const CreateShop = () => {
  const navigate = useNavigate();
  const sesionUserData = sessionStorage.getItem('userId');
  const [createShop] = useCreateShopMutation();
  const user = useAppSelector(userSelector);

  const handleSubmit = useCallback(
    (data: CreateShopDataType) => {
      const formData = new FormData();
      formData.append('user_id', sesionUserData!);
      formData.append('name', data.name);
      formData.append('description', data.description);
      formData.append('contact', data.contact);
      if (data.address) formData.append('address', data.address);
      if (data.logo) formData.append('logo', data.logo);

      createShop(formData).then(() => {
        if (user?.shops.length !== 0) {
          navigate(`/shop/${user?.shops[user?.shops.length - 1].id}`);
        }
      });
    },
    [createShop, navigate, user],
  );

  if (!sesionUserData) {
    return <Navigate to={'/register?createShopStory=true'} state={{ from: location }} />;
  }

  return (
    <main className='flex w-full items-center justify-center'>
      <ShopForm onSubmit={handleSubmit} />
    </main>
  );
};
