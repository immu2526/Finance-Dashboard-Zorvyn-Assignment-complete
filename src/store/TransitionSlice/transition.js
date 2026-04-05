import { createSlice } from "@reduxjs/toolkit";
import { summaryData, transactions } from "../../data/mockdata";

let initialState = {
  list: transactions,
  summary: summaryData,
};

const transitionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    addtransaction: (state, action) => {
      state.list.push(action.payload);
    },
    deletTransition: (state, action) => {
      state.list = state.list.filter((val) => val.id !== action.payload.id);
    },
  },
});

export const { addtransaction, deletTransition } = transitionSlice.actions;
export default transitionSlice.reducer;
