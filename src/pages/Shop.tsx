import { products } from '../mocks/products';
import { shops } from '../mocks/shops';
import { ProductsList } from '../components/ProductsList';
import { useParams } from 'react-router-dom';

export const Shop = () => {
  const { shopId } = useParams();

  return (
    <main className='flex w-full items-center justify-center flex-col mx-auto max-w-2xl lg:max-w-7xl'>
      {shopId && (
        <h1 className='mt-6 max-sm:mt-20 self-start text-3xl font-bold tracking-tight text-gray-700 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          {shops?.[shopId]}
        </h1>
      )}
      <div className='flex w-full justify-center'>
        <ProductsList
          items={products.filter((product) => product.shopId === shopId)}
          className='py-8 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8'
          shopList
        />
      </div>
    </main>
  );
};
