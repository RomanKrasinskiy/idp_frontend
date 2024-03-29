import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    uid: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone: "",
    position: "",
    chief: {},
    preloaderState: false,
    loggedIn: false,
  },
  reducers: {
    setUser(state, action) {
      state.uid = action.payload.uid;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.position = action.payload.position;
    },
    setloggedIn(state, action) {
      state.loggedIn = action.payload;
    },
    setUserId(state, action) {
      state.uid = action.payload;
    },
  },
});

export const { setUser, setloggedIn, setUserId } = userSlice.actions;

export default userSlice.reducer;
