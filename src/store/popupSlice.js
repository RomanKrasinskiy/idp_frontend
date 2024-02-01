import { createSlice } from "@reduxjs/toolkit";

export const popupSlice = createSlice({
    name: 'popup',
    initialState:{
        isOpen: false,
    },
    reducers: {
        openPopup(state){
            state.isOpen = true
        },
        openPopupSecond(state){
            state.isOpen = true
        },
        closePopup(state) {
            state.isOpen = false
        },
        closePopupSecond(state) {
            state.isOpen = false
        }
    }
})

export const {openPopup, openPopupSecond,closePopup, closePopupSecond} = popupSlice.actions;

export default popupSlice.reducer;