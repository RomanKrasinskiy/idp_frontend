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
        closePopup(state) {
            state.isOpen = false
        }
    }
})

export const {openPopup,closePopup} = popupSlice.actions;

export default popupSlice.reducer;