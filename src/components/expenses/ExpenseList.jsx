import React from 'react';

const ExpenseList = ({ expenses, onEdit, onDelete }) => {
  return (
    <div className="records-list">
      <h3>Expense Records</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Item</th>
            <th>Category</th>
            <th>Cost</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(expense => (
            <tr key={expense.id}>
              <td>{new Date(expense.date).toLocaleDateString()}</td>
              <td>{expense.item}</td>
              <td>{expense.category}</td>
              <td>KSH {expense.cost.toLocaleString()}</td>
              <td className="actions">
                <button 
                  className="edit-button"
                  onClick={() => onEdit(expense)}
                >
                  Edit
                </button>
                <button 
                  className="delete-button"
                  onClick={() => onDelete(expense.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
// This component displays a list of expense records.