import React from 'react';

const ExpenseList = ({ expenses, onDeleteExpense, onEditExpense }) => {
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(expense => (
              <tr key={expense.id}>
                <td>{expense.date}</td>
                <td>{expense.item}</td>
                <td>{expense.category}</td>
                <td>KSh {expense.cost.toLocaleString()}</td>
                <td>
                  <button onClick={() => onEditExpense(expense)} className="edit-button">Edit</button>
                  <button onClick={() => onDeleteExpense(expense.id)} className="delete-button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExpenseList;