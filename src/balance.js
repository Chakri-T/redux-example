import React from "react";
import { withdraw, deposit } from "./slices/balanceSlice";
import { useSelector, useDispatch } from "react-redux";

function BalanceComponent() {
  const balance = useSelector((state) => state.balance.availbal);
  const dispatch = useDispatch();
  const handleWithdraw = () => {
    dispatch(withdraw(100));
  };
  const handleDeposit = () => {
    dispatch(deposit(100));
  };
  return (
    <div>
      <h1>availbal: {balance}</h1>
      <button onClick={handleWithdraw}>Withdraw</button>
      <button onClick={handleDeposit}>deposit</button>
    </div>
  );
}
export default BalanceComponent;
