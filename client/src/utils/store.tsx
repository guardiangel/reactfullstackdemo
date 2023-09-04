import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "../reducers/LoginReducerSlice";

export const store = configureStore({
  reducer: {
    loginStateObject: loginReducer,
    // menuDisplay: menuDisplayReducer,
    // leftMenuControl: leftMenuControlReducer,
  },
});
