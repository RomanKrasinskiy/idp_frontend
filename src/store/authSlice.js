import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: '',
    password: '',
    token: ''
  },
  reducers: {
    setlogin(state, action) {
      state.email = action.payload.email;  
      state.password = action.payload.password;
      console.log(state)
    },
    setToken(state, action) {
      state.loggedIn = action.payload;
    },
  },
});

export const { setlogin, setToken } = authSlice.actions;

export default authSlice.reducer;
