import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineFavorite } from 'react-icons/md';
import { ProductsListItemType } from '../../typings/products';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { toggleFavorite } from '../../store/productSlice';
import { useUpdateFavoritesMutation } from '../../services/userApi';
import { userSelector } from '../../store/selectors/userSelectors';

export type ProductsListItemProps = ProductsListItemType;

export const ShopProductsListItem = memo(
  ({ id, name, images, price, favorite }: ProductsListItemProps) => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(userSelector);
    const [updateFavorite] = useUpdateFavoritesMutation();

    const handleUpdateFavorite = (id: string) => {
      const oldFavorites = user?.favorites;
      let currentFavorite: string[];
      if (oldFavorites?.includes(id)) {
        currentFavorite = oldFavorites?.filter((f) => f !== id);
      } else {
        currentFavorite = [...(oldFavorites as string[]), id];
      }
      dispatch(toggleFavorite({ id }));
      updateFavorite({ productId: id, userId: String(user?.id), favorites: currentFavorite });
    };

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
              onClick={() => handleUpdateFavorite(id)}
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
