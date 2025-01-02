import React, { useState } from "react";
import {
  withdraw,
  deposit,
  setName,
  setAccountNumber,
  removeWarning,
} from "../slices/balanceSlice";
import { useSelector, useDispatch } from "react-redux";
import History from "./history";
function BalanceComponent() {
  const [amount, setAmount] = useState();
  const [warning, setWarning] = useState(false);
  const balance = useSelector((state) => state.balance.balances);
  const discrepency = useSelector((state) => state.balance.warning);
  const dispatch = useDispatch();
  const [localName, setLocalName] = useState("");
  const [localAccountNumber, setLocalAccountNumber] = useState(null);
  const accountBalance = balance[localName] || 0;

  const handleNameChange = (e) => {
    setLocalName(e.target.value);
  };
  const handleAccountNumberChange = (e) => {
    setLocalAccountNumber(e.target.value);
  };
  const handleWithdraw = () => {
    if (
      isNaN(amount) ||
      amount <= 0 ||
      amount > accountBalance ||
      localName === "" ||
      localAccountNumber === null
    ) {
      setWarning(true);
    } else {
      setWarning(false);
      dispatch(
        withdraw({ data1: amount, data2: localName, data3: localAccountNumber })
      );
      dispatch(setName(localName));
      dispatch(setAccountNumber(localAccountNumber));
    }
  };

  const handleDeposit = () => {
    if (isNaN(amount) || amount <= 0) {
      setWarning(true);
    } else {
      setWarning(false);
      dispatch(
        deposit({ data1: amount, data2: localName, data3: localAccountNumber })
      );
      dispatch(setName(localName));
      dispatch(setAccountNumber(localAccountNumber));
    }
  };

  return (
    <div className="balance-component">
      <div>
        <form>
          <label className="h3 form-label">
            Name:{"  "}
            <input
              type="text"
              name="name"
              className="form-control mt-3"
              value={localName}
              onChange={handleNameChange}
              required
              placeholder="Enter Your Name"
            ></input>
          </label>
          <br />
          {warning && (
            <div>
              {localName === "" && (
                <div
                  className="alert alert-danger alert-dismissible fade show"
                  role="alert"
                >
                  <strong>You need to enter name!</strong>

                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={() => setWarning(false)}
                  ></button>
                </div>
              )}
            </div>
          )}

          <label className="h3 form-label">
            Account number:{"  "}
            <input
              type="number"
              name="Account"
              className="form-control mt-3 "
              value={localAccountNumber}
              onChange={handleAccountNumberChange}
              required
              placeholder="Enter Your Account Number"
            ></input>
          </label>
          {warning && (
            <div>
              {localAccountNumber === null && (
                <div
                  className="alert alert-danger alert-dismissible fade show"
                  role="alert"
                >
                  <strong>You need to enter account number!</strong>

                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={() => setWarning(false)}
                  ></button>
                </div>
              )}
            </div>
          )}
          {"  "}
        </form>
      </div>
      <div>
        <h1>Available Balance: {accountBalance}</h1>

        <input
          className="mb-3 mt-3"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          placeholder="Enter the amount"
        ></input>
        {warning && (
          <div>
            {(isNaN(amount) || amount <= 0) && (
              <div
                className="alert alert-danger alert-dismissible fade show"
                role="alert"
              >
                <strong>You need to enter amount!</strong>

                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setWarning(false)}
                ></button>
              </div>
            )}
          </div>
        )}
        <br />
        {warning && (
          <div>
            {amount > accountBalance && (
              <div
                className="alert alert-danger alert-dismissible fade show"
                role="alert"
              >
                <strong>Insufficient balance!</strong>

                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setWarning(false)}
                ></button>
              </div>
            )}
          </div>
        )}
        <br />
        {discrepency && (
          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            <strong>{discrepency}</strong>

            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => dispatch(removeWarning())}
            ></button>
          </div>
        )}
        <button className="btn btn-danger wbtn" onClick={handleWithdraw}>
          Withdraw
        </button>
        <button className="btn btn-success" onClick={handleDeposit}>
          deposit
        </button>
      </div>
      <div>
        <History />
      </div>
    </div>
  );
}
export default BalanceComponent;
