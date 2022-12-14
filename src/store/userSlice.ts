import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userApi } from '../services/userApi';
import { UserData } from '../typings/auth';

export type UserSliceType = {
  data?: UserData;
};
const initialState: UserSliceType = {
  data: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authorize: (state, action: PayloadAction<UserData>) => {
      state.data = action.payload;
    },
    logout: (state) => {
      state.data = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(userApi.endpoints.loginUser.matchFulfilled, (state, { payload }) => {
      sessionStorage.setItem('userId', String(payload.id));
      state.data = payload;
    });
    builder.addMatcher(userApi.endpoints.registerUser.matchFulfilled, (state, { payload }) => {
      sessionStorage.setItem('userId', String(payload.id));
      state.data = payload;
    });
    builder.addMatcher(userApi.endpoints.getUser.matchFulfilled, (state, { payload }) => {
      state.data = payload;
    });
  },
});

export const { authorize, logout } = userSlice.actions;
