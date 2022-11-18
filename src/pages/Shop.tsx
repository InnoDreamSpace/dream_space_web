import { products } from '../mocks/products';
import { shops } from '../mocks/shops';
import { ProductsList } from '../components/ProductsList';
import { useParams } from 'react-router-dom';

export const Shop = () => {
  const { shopId } = useParams();

  return (
    <main className='flex w-full items-start justify-center flex-col'>
      <h3 className='font-medium leading-tight text-3xl pt-4 px-4 sm:pt-8 sm:px-6 lg:max-w-7xl lg:px-8 text-brown-900'>
        {shopId ? shops?.[shopId] : undefined}
      </h3>
      <div className='flex w-full'>
        <ProductsList
          items={products.filter((product) => product.shopId === shopId)}
          className='py-8 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8'
          shopList
        />
      </div>
    </main>
  );
};
