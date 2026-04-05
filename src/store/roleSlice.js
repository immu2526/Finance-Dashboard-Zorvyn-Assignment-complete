import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  currentRole: "admin",
};

const roleSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.currentRole = action.payload;
    },
  },
});

export const { setRole } = roleSlice.actions;
export default roleSlice.reducer;
