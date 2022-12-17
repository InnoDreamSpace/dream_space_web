import type { ShopData } from '../typings/shop';
import { commonApi } from './commonApi';

export const shopApi = commonApi.injectEndpoints({
  endpoints: (builder) => ({
    getShops: builder.query<ShopData[], void>({
      query: () => 'shops/',
    }),
    getShop: builder.query<ShopData, number>({
      query: (shopId) => `shops/${shopId}/`,
    }),
    createShop: builder.mutation<ShopData, FormData>({
      query: (data) => ({
        url: 'shops/',
        method: 'POST',
        body: data,
      }),
    }),
    editShop: builder.mutation<ShopData, { shopId: number; data: Omit<Partial<ShopData>, 'id'> }>({
      query: ({ shopId, data }) => ({
        url: `shops/${shopId}/`,
        method: 'PATCH',
        body: data,
      }),
    }),
    deleteShop: builder.mutation<ShopData, number>({
      query: (shopId) => ({
        url: `shops/${shopId}/`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetShopQuery, useGetShopsQuery, useCreateShopMutation, useEditShopMutation, useDeleteShopMutation } =
  shopApi;
