import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setName, setAccountNumber } from "./slices/formSlice";

const Form = () => {
  const name = useSelector((state) => state.form.name);
  const accountNumber = useSelector((state) => state.form.accountNumber);
  const dispatch = useDispatch();
  const [localName, setLocalName] = useState("");
  const [localAccountNumber, setLocalAccountNumber] = useState();
  const handleNameChange = (e) => {
    setLocalName(e.target.value);
  };
  const handleAccountNumberChange = (e) => {
    setLocalAccountNumber(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setName(localName));
    dispatch(setAccountNumber(localAccountNumber));
    // setLocalName("");
    // setLocalAccountNumber();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={localName}
            onChange={handleNameChange}
            required
            placeholder="Enter Your Name"
          ></input>
        </label>
        <label>
          Account number:
          <input
            className="acnt"
            type="number"
            name="Account"
            value={localAccountNumber}
            onChange={handleAccountNumberChange}
            min="100000000000"
            max="999999999999"
            required
            placeholder="Enter Your Account Number"
          ></input>
        </label>
        <button>Submit</button>
      </form>
      <div>
        <h2>Name: {name}</h2>
        <h2>Account Number:{accountNumber}</h2>
      </div>
    </div>
  );
};

export default Form;
