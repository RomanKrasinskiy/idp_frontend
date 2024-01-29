import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "./api/idpApi";

export const fetchGetIdps = createAsyncThunk(
  "idps/fetchGetIdps",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const data = await api.getIdp();
      return fulfillWithValue(data);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchPostIdps = createAsyncThunk(
  "idps/fetchPostIdps",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const data = await api.postIdp();
      return fulfillWithValue(data);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchGetIdpId = createAsyncThunk(
  "idps/fetchGetIdpId",
  async (idpId, { fulfillWithValue, rejectWithValue }) => {
    try {
      const data = await api.getIdpId(idpId);
      return fulfillWithValue(data);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetIdps.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGetIdps.fulfilled, (state, action) => {
        state.loading = false;
        state.idps = action.payload;
      })
      .addCase(fetchGetIdps.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
    builder
      .addCase(fetchPostIdps.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPostIdps.fulfilled, (state, action) => {
        state.loading = false;
        state.idps.push(action.payload);
      })
      .addCase(fetchPostIdps.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
      builder
      .addCase(fetchGetIdpId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGetIdpId.fulfilled, (state, action) => {
        state.loading = false;
        state.idp = action.payload;
      })
      .addCase(fetchGetIdpId.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const idpsCurrent = (state) => state['idps'];

export const { addNewIdp } = idpSlice.actions;

export default idpSlice.reducer;
