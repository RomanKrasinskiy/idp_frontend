import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
        idpId: "",
        name: "Watch",
        leadComment:"",
        mentorComment:"",
        coworkerComment:"",
        dateCreated: "",
        dateEnded: "",
        file: {},
  },
  reducers: {
    setTask(state, action) {
      state.idpId = action.payload.idpId;
      state.name = action.payload.name;
      state.dateCreated = new Date().toISOString();
      state.dateEnded = action.payload.dateEnded;
      state.file = action.payload.file;
    },
    addNewTask(state, action) {
      state.tasks.push({
        name: action.payload.name,
        dateCreated: new Date().toISOString(),
      });
    },
  },
});

export const { addNewTask } = taskSlice.actions;

export default taskSlice.reducer;
