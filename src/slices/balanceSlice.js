import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  availbal: 10000,
};

const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    withdraw: (state, action) => {
      state.availbal = Math.max(state.availbal - action.payload, 0);
    },
    deposit: (state, action) => {
      state.availbal += action.payload;
    },
  },
});
export const { withdraw, deposit } = balanceSlice.actions;
export default balanceSlice.reducer;
