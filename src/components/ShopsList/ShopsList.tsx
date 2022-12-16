import React from 'react';
import { Link } from 'react-router-dom';
import { ShopData } from '../../typings/shop';
import Avatar from 'react-avatar';

type ShopsListProps = {
  items: ShopData[];
  className?: string;
};

export const ShopsList = ({ items }: ShopsListProps) => {
  return (
    <section className='text-gray-600 w-full body-font'>
      <div className='flex w-full mx-auto justify-center flex-wrap gap-4 py-16 px-4 sm:px-6 lg:px-8'>
        {items.map((shop) => (
          <Link
            to={`/shop/${shop.id}`}
            className='w-1/4 lg:w-1/5 max-md:w-1/4 sm:w-1/3 max-sm:w-full'
            key={shop.id}
          >
            <div className='flex flex-col items-start p-4 w-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
              {shop.logo ? (
                <img
                  className='w-full object-cover object-center self-center h-[148px]'
                  src={shop.logo}
                  alt='blog'
                />
              ) : (
                <Avatar
                  name={shop.name}
                  className='w-full object-cover object-center self-center'
                  size='148'
                />
              )}
              <div className='py-6 w-full'>
                {/**
                   * <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
                    CATEGORY
                  </h2>
                   */}
                <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>{shop.name}</h1>
                <p className='w-full leading-relaxed mb-3 truncate'>{shop.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ShopsList;
