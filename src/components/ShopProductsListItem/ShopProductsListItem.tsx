import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineFavorite } from 'react-icons/md';
import { ProductsListItemType } from '../../typings/products';

export type ProductsListItemProps = ProductsListItemType;

export const ShopProductsListItem = memo(
  ({ id, name, images, price, favorite }: ProductsListItemProps) => {
    return (
      <div className='group overflow-hidden'>
        <Link to={`/product/${id}`}>
          <div className='aspect-square w-full overflow-hidden rounded-lg bg-gray-200'>
            <img
              src={images?.[0] ?? 'src/assets/images/no-image.jpg'}
              alt={name}
              className='h-full w-full object-cover object-center hover:opacity-75'
            />
          </div>
        </Link>

        <div className='flex max-w-full justify-between items-center'>
          <div className='w-full max-w-[240px] max-m:max-w-[280px]'>
            <Link to={`/product/${id}`}>
              <h3 className='mt-4 text-lg font-semibold text-gray-700 truncate'>{name}</h3>
            </Link>
          </div>
          <>
            <MdOutlineFavorite
              className={`h-6 w-6 flex-shrink-0 ${
                favorite ? 'text-red-400 hover:text-gray-500' : 'text-gray-500 hover:text-red-400'
              }`}
              aria-hidden='true'
              onClick={() => console.log('to favorite')}
            />
            <span className='sr-only'>favorite items</span>
          </>
        </div>
        <p className='mt-1 text-lg font-medium text-gray-900'>{price} RUB</p>
      </div>
    );
  },
);

ShopProductsListItem.displayName = 'ShopProductsListItem';
