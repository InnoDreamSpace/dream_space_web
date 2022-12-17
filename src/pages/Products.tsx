import { ProductsList } from '../components/ProductsList';
import { useAppSelector } from '../hooks/store';
import { useGetProductsQuery } from '../services/productApi';
import { productsSelector } from '../store/selectors/productSelectors';

export const Products = () => {
  useGetProductsQuery();
  const products = useAppSelector(productsSelector);

  if (products === undefined) {
    return null;
  }

  return (
    <main className='flex w-full items-center justify-center'>
      <ProductsList items={products} className='py-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8' />
    </main>
  );
};
