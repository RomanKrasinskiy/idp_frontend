import { configureStore } from "@reduxjs/toolkit";
import idpReducer from "./idpSlice";
import taskReducer from "./taskSlice";
import userReducer from "./userSlice";
import popupReducer from './popupSlice'
import { userApi } from "./api/userApi";
import { idpApi } from "./api/idpApi";
import { taskApi } from "./api/taskApi";

export const store = configureStore({
  reducer: {
    users: userReducer,
    idps: idpReducer,
    tasks: taskReducer,
    popup: popupReducer,
    [userApi.reducerPath]: userApi.reducer,
    [idpApi.reducerPath]: idpApi.reducer,
    [taskApi.reducerPath]: taskApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(userApi.middleware).concat(idpApi.middleware).concat(taskApi.middleware)
});


