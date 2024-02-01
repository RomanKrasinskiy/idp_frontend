import { configureStore } from "@reduxjs/toolkit";
import idpReducer from "./idpSlice";
import taskReducer from "./taskSlice";
import authReducer from "./authSlice";
import userReducer from "./userSlice";
import popupReducer from './popupSlice';
import { authApi } from "./api/authApi";

import { userApi } from "./api/userApi";
import { idpApi } from "./api/idpApi";
import { taskApi } from "./api/taskApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
    idps: idpReducer,
    tasks: taskReducer,
    popup: popupReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [idpApi.reducerPath]: idpApi.reducer,
    [taskApi.reducerPath]: taskApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(authApi.middleware).concat(userApi.middleware).concat(idpApi.middleware).concat(taskApi.middleware)
});


