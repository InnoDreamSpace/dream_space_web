import { ProductsList } from '../components/ProductsList';
import { useAppSelector } from '../hooks/store';
import { productsSelector } from '../store/selectors/productSelectors';
import { useGetProductsQuery } from '../services/productApi';
import { userSelector } from '../store/selectors/userSelectors';

export const Products = () => {
  useGetProductsQuery();
  const products = useAppSelector(productsSelector);
  const user = useAppSelector(userSelector);
  const favorites = user?.favorites;

  const finalProduct = products?.map((product) => {
    console.log(favorites);
    if (favorites?.includes(product.id)) {
      return { ...product, favorite: true };
    }
    return product;
  });

  if (finalProduct === undefined) {
    return null;
  }

  return (
    <main className='flex w-full items-center justify-center'>
      <ProductsList
        items={finalProduct}
        className='py-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8'
      />
    </main>
  );
};
