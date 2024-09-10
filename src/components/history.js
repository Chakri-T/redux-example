import React from "react";
import { useSelector } from "react-redux";
const History = () => {
  const history = useSelector((state) => state.balance.history);

  const handleColor = (item) => {
    if (item.type === "Withdraw") {
      return "text-danger";
    } else {
      return "text-success";
    }
  };

  return (
    <div className="history-component mt-3">
      <h2>Transaction History</h2>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Transaction type</th>
            <th>Amount</th>
            <th>Date & Time</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => (
            <tr>
              <td key={index} className={handleColor(item)}>
                {item.type}
              </td>
              <td key={index}>{item.amount}</td>
              <td key={index}>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
