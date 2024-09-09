import React from "react";
import BalanceComponent from "./balance";
import Form from "./form";
import "./styles/styles.scss";
function App() {
  return (
    <div className="App">
      <Form />
      <BalanceComponent />
    </div>
  );
}

export default App;
