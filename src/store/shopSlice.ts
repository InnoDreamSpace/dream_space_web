import { createSlice } from '@reduxjs/toolkit';
import { productApi } from '../services/productApi';
import { shopApi } from '../services/shopApi';
import { ProductsListItemType } from '../typings/products';
import { ShopData } from '../typings/shop';

export type ShopSliceType = {
  data?: ShopData;
  products?: ProductsListItemType[];
};
const initialState: ShopSliceType = {
  data: undefined,
};

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(shopApi.endpoints.getShop.matchFulfilled, (state, { payload }) => {
      state.data = payload;
    });
    builder.addMatcher(shopApi.endpoints.editShop.matchFulfilled, (state, { payload }) => {
      state.data = payload;
    });
    builder.addMatcher(
      productApi.endpoints.getShopProducts.matchFulfilled,
      (state, { payload }) => {
        state.products = payload.map((product) => ({
          ...product,
          shop: product.shop_id,
          shopName: product.shop_name,
        }));
      },
    );
    builder.addMatcher(productApi.endpoints.createProduct.matchFulfilled, (state, { payload }) => {
      if (state.products !== undefined) {
        state.products = [...state.products, payload];
      } else {
        state.products = [payload];
      }
    });
  },
});

// export const {} = shopSlice.actions;
