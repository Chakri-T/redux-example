import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  availbal: 10000,
  history: [],
};

const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    withdraw: (state, action) => {
      const amount = action.payload;
      state.availbal = Math.max(state.availbal - amount, 0);
      state.history.push({
        type: "Withdraw",
        amount,
        date: new Date().toLocaleString(),
      });
    },
    deposit: (state, action) => {
      const amount = action.payload;
      state.availbal += Number(amount);
      state.history.push({
        type: "Deposit",
        amount,
        date: new Date().toLocaleString(),
      });
    },
  },
});
export const { withdraw, deposit } = balanceSlice.actions;
export default balanceSlice.reducer;
