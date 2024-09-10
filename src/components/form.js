import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setName, setAccountNumber } from "../slices/formSlice";

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
    <div className="form-component">
      <form onSubmit={handleSubmit}>
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
        <br />
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
        {"  "}
        <button className="btn btn-primary">Submit</button>
      </form>
      <div className="details">
        <h2>
          Name: <span className="text-muted">{name}</span>
        </h2>
        <h2>
          Account Number:<span className="text-muted">{accountNumber}</span>
        </h2>
      </div>
    </div>
  );
};

export default Form;
