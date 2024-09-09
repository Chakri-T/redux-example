import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: "",
  accountNumber: [],
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setAccountNumber(state, action) {
      state.accountNumber = action.payload;
    },
  },
});

export const { setName, setAccountNumber } = formSlice.actions;
export default formSlice.reducer;
