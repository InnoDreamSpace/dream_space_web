import { ShopsList } from '../components/ShopsList';
import { useGetShopsQuery } from '../services/shopApi';

export const Shops = () => {
  const { data: shops } = useGetShopsQuery();

  if (shops === undefined) {
    return null;
  }

  return (
    <main className='flex w-full items-center justify-center'>
      <ShopsList items={shops} className='py-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8' />
    </main>
  );
};
