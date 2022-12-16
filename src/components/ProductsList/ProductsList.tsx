import React, { memo } from 'react';
import { ProductsListItem } from '../ProductsListItem';
import { ProductsListItemType } from '../../typings/products';
import { ShopProductsListItem } from '../ShopProductsListItem';

export type ProductListProps = {
  className?: string;
  items: ProductsListItemType[];
  shopList?: boolean;
};

export const ProductsList = memo(({ className, items, shopList }: ProductListProps) => {
  return (
    <div className={`${className} bg-white max-w-2xl `}>
      <h2 className='sr-only'>Products</h2>
      <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8'>
        {items?.map((product) =>
          shopList ? (
            <ShopProductsListItem key={product.id} {...product} />
          ) : (
            <ProductsListItem key={product.id} {...product} />
          ),
        )}
      </div>
    </div>
  );
});

ProductsList.displayName = 'ProductList';
