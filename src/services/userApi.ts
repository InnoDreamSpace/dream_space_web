import type {
  FavoriteRequestType,
  LoginDataType,
  RegisterDataType,
  UserData,
} from '../typings/auth';
import { ProductType } from '../typings/products';
import { commonApi } from './commonApi';

export const userApi = commonApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<UserData, void>({
      query: () => 'users/',
    }),
    getUser: builder.mutation<UserData, number>({
      query: (userId) => `users/${userId}/`,
    }),
    loginUser: builder.mutation<UserData, LoginDataType>({
      query: (userData) => ({
        url: 'users/login/',
        method: 'POST',
        body: {
          email: userData.email,
          password: userData.password,
        },
      }),
    }),
    registerUser: builder.mutation<UserData, RegisterDataType>({
      query: (userData) => ({
        url: 'users/',
        method: 'POST',
        body: {
          email: userData.email,
          password: userData.password,
          first_name: userData.firstName,
          last_name: userData.lastName,
        },
      }),
    }),
    updateFavorites: builder.mutation<string, FavoriteRequestType>({
      query: (favData) => ({
        url: `users/${favData.userId}/`,
        method: 'PATCH',
        body: {
          favorites: favData.favorites?.map(item => Number(item)),
        },
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useLoginUserMutation,
  useGetUserMutation,
  useRegisterUserMutation,
  useUpdateFavoritesMutation,
} = userApi;
