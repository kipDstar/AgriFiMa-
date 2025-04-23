import React from 'react';

const IncomeList = ({ incomes }) => {
  return (
    <div className="income-list">
      <h3>Income Records</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Source</th>
            <th>Category</th>
            <th>Product</th>
            <th>Volume (kg)</th>
            <th>Amount (KSH)</th>
          </tr>
        </thead>
        <tbody>
          {incomes.map(income => (
            <tr key={income.id}>
              <td>{income.date}</td>
              <td>{income.source}</td>
              <td>{income.category}</td>
              <td>{income.product}</td>
              <td>{income.volume}</td>
              <td>{income.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IncomeList;
