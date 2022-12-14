import * as React from "react";
import { ShopForm } from '../components/ShopForm';

export const CreateShop = () => {

  return (
    <main className='flex w-full items-center justify-center'>
      <ShopForm onSubmit={(data) => console.log(data)} />
    </main>
  );
};
