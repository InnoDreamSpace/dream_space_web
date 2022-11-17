import { products } from '../mocks/products';
import { ProductsList } from '../components/ProductsList';

export const Products = () => {
  return (
    <main className='flex w-full items-center justify-center'>
      <ProductsList items={products} />
    </main>
  );
};
