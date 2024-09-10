import React from "react";
import BalanceComponent from "./components/balance";
import History from "./components/history";
import Form from "./components/form";
import "./styles/styles.scss";
function App() {
  return (
    <div className="App container">
      <p className="text-uppercase h1 mx-auto ">Account Details</p>
      <Form />
      <BalanceComponent />
      <History />
    </div>
  );
}

export default App;
