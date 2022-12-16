import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { productApi } from '../services/productApi';
import { ProductsListItemType, ProductType } from '../typings/products';

export type ProductSliceType = {
  products?: ProductsListItemType[];
  product?: ProductType;
};
const initialState: ProductSliceType = {
  products: [],
  product: undefined,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<{ id: string }>) => {
      const product = state.products?.find((product) => product.id === action.payload.id);
      if (product) {
        product.favorite = !product.favorite;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(productApi.endpoints.getProducts.matchFulfilled, (state, { payload }) => {
      state.products = payload.map((item) => ({
        ...item,
        shopId: item.shop_id,
        shopName: item.shop_name,
      }));
    });
    builder.addMatcher(productApi.endpoints.getProduct.matchFulfilled, (state, { payload }) => {
      state.product = {
        ...payload,
        shopId: payload.shop_id,
        shopName: payload.shop_name,
      };
    });
    builder.addMatcher(productApi.endpoints.editProduct.matchFulfilled, (state, { payload }) => {
      state.product = {
        ...payload,
        shopId: payload.shop_id,
        shopName: payload.shop_name,
      };
    });
  },
});

export const { toggleFavorite } = productSlice.actions;
