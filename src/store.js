import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./slice";
const store = configureStore({
  reducer: {
    balance: accountSlice,
  },
});

export default store;
