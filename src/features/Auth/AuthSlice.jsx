import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
  name: "auth",
  initialState: { token: false },
  reducers: {
    haveToken: (state) => {
      state.token = !state.token;
    },
  },
});

export default AuthSlice.reducer;
export const { haveToken } = AuthSlice.actions;
