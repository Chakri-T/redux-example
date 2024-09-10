import React, { useState } from "react";
import { withdraw, deposit } from "../slices/balanceSlice";
import { useSelector, useDispatch } from "react-redux";

function BalanceComponent() {
  const [amount, setAmount] = useState();
  const [warning, setWarning] = useState(false);
  const balance = useSelector((state) => state.balance.availbal);
  const dispatch = useDispatch();
  const handleWithdraw = () => {
    if (isNaN(amount) || amount <= 0) {
      setWarning(true);
    } else {
      setWarning(false);
      dispatch(withdraw(amount));
    }
    // setAmount();
  };

  const handleDeposit = () => {
    if (isNaN(amount) || amount <= 0) {
      setWarning(true);
    } else {
      setWarning(false);
      dispatch(deposit(amount));
    }
    // setAmount();
  };

  return (
    <div className="balance-component">
      <h1>Available Balance: {balance}</h1>

      <input
        className="mb-3 mt-3"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        placeholder="Enter the amount"
      ></input>
      {warning && (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong>You need to enter some amount!</strong>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => setWarning(false)}
          ></button>
        </div>
      )}
      <br />
      <button className="btn btn-danger wbtn" onClick={handleWithdraw}>
        Withdraw
      </button>
      <button className="btn btn-success" onClick={handleDeposit}>
        deposit
      </button>
    </div>
  );
}
export default BalanceComponent;
