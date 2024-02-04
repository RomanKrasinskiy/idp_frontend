import { createSlice } from "@reduxjs/toolkit";

export const employeeIdpsSlice = createSlice({
  name: "employeeIdps",
  initialState: {
    active: 0,
    closed: 0,
    count: 0,
    in_total: 0,
    overdue: 0,
    results: [
      {
        idp_id: "",
        name: "",
        employee: {
          first_name: "",
          last_name: "",
        },
        end_date_plan: "",
        status: "",
      },
    ],
  },
  reducers: {
    setEmployeeIdps(state, action) {
      if (action.payload) {
        state.active = action.payload.active;
        state.closed = action.payload.closed;
        state.count = action.payload.count;
        state.in_total = action.payload.in_total;
        state.overdue = action.payload.overdue;
        state.results = action.payload.results;
      }
    },
  },
});

export const { setEmployeeIdps } = employeeIdpsSlice.actions;

export default employeeIdpsSlice.reducer;
