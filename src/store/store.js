import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "../slices/balanceSlice";
import formReducer from "../slices/formSlice";
const store = configureStore({
  reducer: {
    balance: balanceReducer,
    form: formReducer,
  },
});

export default store;
