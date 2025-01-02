import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  accountNumber: [],
  balances: {},
  warning: "",
  history: [],
};

const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setAccountNumber(state, action) {
      state.accountNumber = action.payload;
    },
    withdraw: (state, action) => {
      const { data1, data2, data3 } = action.payload;

      const history = state.history;

      const existingTransaction = state.history.find(
        (item) => item.account === data3 && item.name !== data2
      );

      if (existingTransaction) {
        state.warning = "Same account number shouldn't have different names";

        return;
      } else {
        if (!state.balances[data2]) {
          state.balances[data2] = 0;
        }
        if (state.balances[data2] >= data1) {
          state.balances[data2] = Math.max(state.balances[data2] - data1, 0);
        }

        history.push({
          name: data2,
          account: data3,
          type: "Withdraw",
          data1,
          date: new Date().toLocaleString(),
          amount: state.balances[data2],
        });
      }

      state.warning = "";
    },

    deposit: (state, action) => {
      const { data1, data2, data3 } = action.payload;

      const history = state.history;

      const existingTransaction = state.history.find(
        (item) => item.account === data3 && item.name !== data2
      );

      if (existingTransaction) {
        state.warning = "Same account number shouldn't have different names";
        return;
      } else {
        if (!state.balances[data2]) {
          state.balances[data2] = 0;
        }

        state.balances[data2] += Number(data1);
        history.push({
          name: data2,
          account: data3,
          type: "Deposit",
          data1,
          date: new Date().toLocaleString(),
          amount: state.balances[data2],
        });
      }
      state.warning = "";
    },
    removeWarning: (state) => {
      state.warning = "";
    },
  },
});
export const { withdraw, deposit, setAccountNumber, setName, removeWarning } =
  balanceSlice.actions;
export default balanceSlice.reducer;
