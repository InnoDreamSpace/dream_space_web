import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

export const productSelector = createSelector(
  (state: RootState) => state.products.product,
  (product) => product,
);

export const productsSelector = createSelector(
  (state: RootState) => state.products.products,
  (products) => products,
);
