import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: "",
    password: "",
    token: "",
  },
  reducers: {
    setlogin(state, action) {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const { setlogin, setToken } = authSlice.actions;

export default authSlice.reducer;
