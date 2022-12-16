import { createSlice } from '@reduxjs/toolkit';
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(productApi.endpoints.getProducts.matchFulfilled, (state, { payload }) => {
      state.products = payload;
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

// export const {} = shopSlice.actions;
