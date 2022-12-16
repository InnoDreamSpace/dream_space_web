import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const commonApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://188.225.14.155:8000/' }),
  tagTypes: ['User', 'Shop'],
  endpoints: () => ({}),
});
