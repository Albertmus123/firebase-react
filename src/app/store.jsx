import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../features/Auth/AuthSlice";
import UserReducer from "../features/Auth/UserSlice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    user: UserReducer,
  },
});
