import { ProductsList } from '../components/ProductsList';
import { useGetProductsQuery } from '../services/productApi';

export const Products = () => {
  const { data: products } = useGetProductsQuery();

  if (products === undefined) {
    return null;
  }

  return (
    <main className='flex w-full items-center justify-center'>
      <ProductsList items={products} className='py-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8' />
    </main>
  );
};
