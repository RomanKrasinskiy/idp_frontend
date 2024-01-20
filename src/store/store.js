import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./api/userApi";
import { idpApi } from "./api/idpApi";
import { taskApi } from "./api/taskApi";
import idpReducer from "./idpSlice";
import taskReducer from "./taskSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    idp: idpReducer,
    task: taskReducer,
    [userApi.reducerPath]: userApi.reducer,
    [idpApi.reducerPath]: idpApi.reducer,
    [taskApi.reducerPath]: taskApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware).concat(idpApi.middleware).concat(taskApi.middleware)
});
