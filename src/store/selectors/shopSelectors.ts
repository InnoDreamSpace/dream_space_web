import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

export const shopSelector = createSelector(
  (state: RootState) => state.shop,
  (shop) => shop,
);
