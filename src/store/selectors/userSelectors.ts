import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

export const userSelector = createSelector(
  (state: RootState) => state.user.data,
  (user) => user,
);

export const favoriteSelector = createSelector(
  (state: RootState) => state.user.data?.favorites,
  (favorite) => favorite,
);
