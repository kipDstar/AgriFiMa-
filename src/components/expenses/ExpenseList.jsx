import React from 'react';
//import './ExpenseList.css';

const ExpenseList = ({ expenses }) => {
  return (
    <div className="expense-list">
      <h3>Recent Expenses</h3>
      {expenses.length === 0 ? (
        <p>No expenses recorded yet</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Item</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(expense => (
              <tr key={expense.id}>
                <td>{expense.date}</td>
                <td>{expense.item}</td>
                <td>{expense.category}</td>
                <td>KSh {expense.cost.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExpenseList;
// This component displays a list of recent expenses.
// It shows the date, item, category, and amount for each expense.