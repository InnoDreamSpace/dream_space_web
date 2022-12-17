import { ProductsList } from '../components/ProductsList';
import { useAppSelector } from '../hooks/store';
import { useGetProductsQuery } from '../services/productApi';
import { productsSelector } from '../store/selectors/productSelectors';
import { userSelector } from '../store/selectors/userSelectors';

export const Favorite = () => {
  const user = useAppSelector(userSelector);
  useGetProductsQuery();
  const products = useAppSelector(productsSelector);
  const favorites = user?.favorites;
  const finalProduct = products
    ?.filter((product) => favorites?.includes(product.id))
    .map((product) => ({ ...product, favorite: true }));

  if (!user) {
    return (
      <main className='flex w-full items-center justify-center flex-col mx-auto max-w-2xl lg:max-w-7xl'>
        <h1 className='mt-6 max-sm:mt-20 self-start text-3xl font-bold tracking-tight text-gray-700 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          Favorite
        </h1>
        <div className='flex w-full justify-center'>
          <h2 className='font-semibold my-12'>
            There are no products in favorite list yet, register to create your list of favorites
            items
          </h2>
        </div>
      </main>
    );
  }

  return (
    <main className='flex w-full items-center justify-center flex-col mx-auto max-w-2xl lg:max-w-7xl'>
      <h1 className='mt-6 max-sm:mt-20 self-start text-3xl font-bold tracking-tight text-gray-700 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        Favorite
      </h1>
      <div className='flex w-full justify-center'>
        {favorites && favorites.length ? (
          <ProductsList
            items={finalProduct || []}
            className='py-8 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8'
          />
        ) : (
          <h2 className='font-semibold my-12'>
            There are no products in your favorite list yet, add items to the list by clicking on
            the heart icon close to products
          </h2>
        )}
      </div>
    </main>
  );
};
