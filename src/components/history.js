import React, { useState } from "react";
import { useSelector } from "react-redux";
const History = () => {
  const history = useSelector((state) => state.balance.history);

  const [localHistoryName, setLocalHistoryName] = useState("");
  const [filteredHistory, setFilteredHistory] = useState(history);
  const handleColor = (item) => {
    return item.type === "Withdraw" ? "text-danger" : "text-success";
  };
  const handleHistoryName = (e) => {
    e.preventDefault();

    const filtered = history.filter((item) => item.name === localHistoryName);
    setFilteredHistory(filtered);
    console.log(filteredHistory);
  };

  return (
    <>
      <div className="history-component mt-3">
        <form onSubmit={handleHistoryName}>
          <label className="h3 form-label">
            Enter a name to get their transaction history
            <input
              type="text"
              className="form-control"
              value={localHistoryName}
              onChange={(e) => setLocalHistoryName(e.target.value)}
            ></input>
          </label>
          <button type="submit"> Get History</button>
        </form>
      </div>
      <h2>Transaction History</h2>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Account number</th>
            <th>Transaction type</th>
            <th>Amount</th>
            <th>Date & Time</th>
          </tr>
        </thead>
        <tbody>
          {filteredHistory.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.account}</td>
              <td className={handleColor(item)}>{item.type}</td>
              <td>{item.data1}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default History;
