import React, { useState, useEffect } from 'react';
import categories from '../../utilis/categories';
import './EditExpenseForm.css'; // Import CSS

const EditExpenseForm = ({ expense, onUpdateExpense, onCancel }) => {
  const [editedExpense, setEditedExpense] = useState(expense);

  useEffect(() => {
    setEditedExpense(expense);
  }, [expense]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedExpense(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editedExpense.item || !editedExpense.cost || !editedExpense.date || !editedExpense.category) {
      alert('Please fill all required fields');
      return;
    }
    const costValue = parseFloat(editedExpense.cost);
    if (isNaN(costValue) || costValue <= 0) {
      alert('Please enter a valid cost');
      return;
    }
    const updatedExpenseData = {
      ...editedExpense,
      cost: costValue,
    };
    onUpdateExpense(e, updatedExpenseData);
  };

  return (
    <form onSubmit={handleSubmit} className="edit-expense-form">
      <h2>Edit Expense</h2>
      <div className="form-group">
        <label>Item*</label>
        <input
          type="text"
          name="item"
          value={editedExpense.item}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Category*</label>
        <select
          name="category"
          value={editedExpense.category}
          onChange={handleChange}
          required
        >
          {categories.expense.map(cat => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Cost (KSH)*</label>
        <input
          type="number"
          name="cost"
          value={editedExpense.cost}
          onChange={handleChange}
          min="0"
          step="1"
          required
        />
      </div>

      <div className="form-group">
        <label>Date*</label>
        <input
          type="date"
          name="date"
          value={editedExpense.date.split('T')[0]}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="save-button">Save Changes</button>
        <button type="button" onClick={onCancel} className="cancel-button">Cancel</button>
      </div>
    </form>
  );
};

export default EditExpenseForm;