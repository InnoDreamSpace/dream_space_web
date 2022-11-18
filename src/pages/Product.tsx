import { productsMap } from '../mocks/products';
import { Link, useParams } from 'react-router-dom';

export const Product = () => {
  const { productId } = useParams();

  if (!productId || !productsMap?.[productId]) {
    return null;
  }

  const product = productsMap?.[productId];

  const { title, shopId, shopName, images, description, sizes } = product;

  return (
    <main className='flex w-full items-center justify-center flex-col mx-auto max-w-2xl lg:max-w-7xl'>
      <div className='flex w-full justify-between max-sm:flex-col'>
        <h1 className='mt-6 max-sm:mt-20 self-start text-3xl font-bold tracking-tight text-gray-700 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          {title}
        </h1>
        <h1 className='mt-6 max-sm:mt-2 max-sm:mt-20 self-start text-3xl tracking-tight text-gray-700 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          by{' '}
          <Link to={`/shop/${shopId}`} className='font-bold text-brown-700'>
            {shopName}
          </Link>
        </h1>
      </div>

      <div className='flex w-full justify-center py-8 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8 flex-col lg:flex-row'>
        <div className='mb-4 w-full lg:w-3/4'>
          <img src={images[0]} className='max-w-full h-auto rounded-lg' alt={title} />
        </div>

        <div className='ml-0 lg:ml-10 lg:col-span-2 lg:col-start-1 lg:pt-6 lg:pb-16 lg:pr-8'>
          <div>
            <h3 className='mt-4 text-lg font-semibold text-gray-700'>Description</h3>

            <div className='space-y-6'>
              <p className='text-base text-gray-900'>{description}</p>
            </div>
          </div>

          <div className='mt-10'>
            <h3 className='mt-4 text-lg font-semibold text-gray-700'>Properties</h3>

            <div className='mt-4'>
              <ul role='list' className='list-none space-y-2'>
                <li className='text-gray-400'>
                  <span className='text-gray-600 font-semibold'>Height: </span>
                  <span className='text-gray-600'>{sizes.height}</span>
                </li>

                <li className='text-gray-400'>
                  <span className='text-gray-600 font-semibold'>Width: </span>
                  <span className='text-gray-600'>{sizes.width}</span>
                </li>

                <li className='text-gray-400'>
                  <span className='text-gray-600 font-semibold'>Weight: </span>
                  <span className='text-gray-600'>{sizes.weight}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
