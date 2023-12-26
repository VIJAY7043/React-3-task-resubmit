import React from "react";

const Dashboard = ({ monthlySavings }) => {
  return (
    <div className="dashboard">
      <h2>Monthly Savings</h2>
      <p>${monthlySavings}</p>
    </div>
  );
};

export default Dashboard;