import { createSlice } from "@reduxjs/toolkit";


export const idpSlice = createSlice({
  name: "idps",
  initialState: {
    idps: [],
    idp: {},
    userId: "",
    idpId: "",
    name: "",
    dateCreated: "",
    dateEnded: "",
    loading: true,
    error: null,
    status: ''
  },
  reducers: {
    setIdp(state, action) {
      state.dateCreated = action.payload.dateCreated;
      state.name = action.payload.name;
      state.idpId = action.payload.idpId;
    },
    addNewIdp(state, action) {
      state.idps.push({
        userId: action.payload.userId,
        idpId: action.payload.idpId,
        name: action.payload.name,
        dateCreated: new Date().toISOString(),
        dateEnded: action.payload.dateEnded,
      });
  
    },
    
  }
});

export const idpsCurrent = (state) => state['idps'];

export const { addNewIdp } = idpSlice.actions;

export default idpSlice.reducer;
