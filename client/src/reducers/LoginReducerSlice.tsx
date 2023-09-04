import { createSlice } from "@reduxjs/toolkit";

interface LoginStateType {
  loginState: boolean;
}

export interface LoginState {
  loginStateObject: LoginStateType;
}

export const LoginReducerSlice = createSlice({
  name: "loginStateObject",
  initialState: {
    loginState: false,
  },
  reducers: {
    setLoginState(state, action) {
      return action.payload;
    },
  },
});

export const { setLoginState } = LoginReducerSlice.actions;
//used for store.ts
export const loginReducer = LoginReducerSlice.reducer;
