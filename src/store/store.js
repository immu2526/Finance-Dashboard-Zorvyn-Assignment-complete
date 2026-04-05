import { configureStore } from "@reduxjs/toolkit";
import roleReducer from "./roleSlice";
import transactionReducer from "./TransitionSlice/transition.js";
const store = configureStore({
  reducer: {
    role: roleReducer,
    transactions: transactionReducer,
  },
});

export default store;
