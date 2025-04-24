import React from 'react';

const IncomeList = ({ incomes, onDeleteIncome, onEditIncome }) => {
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
            <th>Actions</th> 
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
              <td>
                <button onClick={() => onEditIncome(income)} className="edit-button">Edit</button>
                <button onClick={() => onDeleteIncome(income.id)} className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IncomeList;