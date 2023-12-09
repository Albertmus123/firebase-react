import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  accessToken: null,
};

export const AuthSlice = createSlice({
  name: "user",
  initialState: initialValue,
  reducers: {
    addUser: (state, action) => {
      state.accessToken = action.payload;
    },
  },
});

export default AuthSlice.reducer;
export const { addUser } = AuthSlice.actions;
