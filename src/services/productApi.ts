import { IProductType, ProductType, IProductsListItemType } from '../typings/products';
import { commonApi } from './commonApi';

export const productApi = commonApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<IProductsListItemType[], void>({
      query: () => 'products/',
    }),
    getShopProducts: builder.query<IProductsListItemType[], number>({
      query: (shopId) => `shops/${shopId}/products/`,
    }),
    getProduct: builder.query<IProductType, number>({
      query: (productId) => `products/${productId}/`,
    }),
    createProduct: builder.mutation<IProductType, FormData>({
      query: (data) => ({
        url: 'products/',
        method: 'POST',
        body: data,
      }),
    }),
    editProduct: builder.mutation<
      IProductType,
      { productId: number; data: Omit<Partial<ProductType>, 'id'> }
    >({
      query: ({ productId, data }) => ({
        url: `products/${productId}/`,
        method: 'PATCH',
        body: data,
      }),
    }),
    deleteProduct: builder.mutation<IProductType, number>({
      query: (productId) => ({ url: `products/${productId}/`, method: 'DELETE' }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetShopProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useEditProductMutation,
} = productApi;
