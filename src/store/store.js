import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import idpReducer from './idpSlice'
import taskReducer from './taskSlice'


export const store = configureStore({
    reducer:{
        user: userReducer,
        idp: idpReducer,
        task: taskReducer
    }
});
