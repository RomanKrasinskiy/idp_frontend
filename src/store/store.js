import { configureStore } from "@reduxjs/toolkit";
import idpReducer from "./idpSlice";
import taskReducer from "./taskSlice";
import userReducer from "./userSlice";
import popupReducer from './popupSlice'

export const store = configureStore({
  reducer: {
    users: userReducer,
    idps: idpReducer,
    tasks: taskReducer,
    popup: popupReducer,
  },
});


