import { products } from '../mocks/products';
import { ProductsList } from '../components/ProductsList';

export const Favorite = () => {
  return (
    <main className='flex w-full items-center justify-center flex-col mx-auto max-w-2xl lg:max-w-7xl'>
      <h1 className='mt-6 max-sm:mt-20 self-start text-3xl font-bold tracking-tight text-gray-700 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        Favorite
      </h1>
      <div className='flex w-full justify-center'>
        <ProductsList
          items={products.filter((product) => product.favorite)}
          className='py-8 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8'
        />
      </div>
    </main>
  );
};
