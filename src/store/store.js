import { configureStore } from "@reduxjs/toolkit";
import idpReducer from "./idpSlice";
import taskReducer from "./taskSlice";
import authReducer from "./authSlice";
import userReducer from "./userSlice";
import { authApi } from "./api/authApi";
import { userApi } from "./api/userApi";
import { idpApi } from "./api/idpApi";
import { taskApi } from "./api/taskApi";
import popup1Reducer from "./reducers/popup1Reducer";
import popup2Reducer from "./reducers/popup2Reducer";

export const store = configureStore({
  reducer: {
    popup1: popup1Reducer,
    popup2: popup2Reducer,
    auth: authReducer,
    users: userReducer,
    idps: idpReducer,
    tasks: taskReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [idpApi.reducerPath]: idpApi.reducer,
    [taskApi.reducerPath]: taskApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(userApi.middleware)
      .concat(idpApi.middleware)
      .concat(taskApi.middleware),
});
