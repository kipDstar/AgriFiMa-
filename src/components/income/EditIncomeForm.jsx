import React, { useState, useEffect } from 'react';
import categories from '../../utilis/categories';
import './EditIncomeForm.css'; // Import the CSS file

const EditIncomeForm = ({ income, onUpdateIncome, onCancel }) => {
  const [editedIncome, setEditedIncome] = useState(income);

  useEffect(() => {
    setEditedIncome(income); // Initialize with the income to be edited
  }, [income]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedIncome(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation (you can expand this)
    if (!editedIncome.source || !editedIncome.amount || !editedIncome.date) {
      alert('Please fill all required fields');
      return;
    }
    const amountValue = parseFloat(editedIncome.amount);
     if (isNaN(amountValue) || amountValue <= 0) {
        alert('Please enter a valid amount');
        return;
    }

    const updatedIncomeData = {
      ...editedIncome,
      amount: amountValue
    };
    onUpdateIncome(e, updatedIncomeData);
  };

  return (
    <form onSubmit={handleSubmit} className="edit-income-form">
      <h2>Edit Income</h2>
      <div className="form-group">
        <label>Income Source*</label>
        <input
          type="text"
          name="source"
          value={editedIncome.source}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Category*</label>
        <select
          name="category"
          value={editedIncome.category}
          onChange={handleChange}
          required
        >
          {categories.income.map(cat => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Product</label>
        <input
          type="text"
          name="product"
          value={editedIncome.product}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Volume (kg)</label>
        <input
          type="number"
          name="volume"
          value={editedIncome.volume}
          onChange={handleChange}
          min="0"
          step="0.01"
        />
      </div>

      <div className="form-group">
        <label>Amount (KSH)*</label>
        <input
          type="number"
          name="amount"
          value={editedIncome.amount}
          onChange={handleChange}
          required
          min="0"
          step="0.01"
        />
      </div>

      <div className="form-group">
        <label>Date*</label>
        <input
          type="date"
          name="date"
          value={editedIncome.date.split('T')[0]} // Format the date
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          name="description"
          value={editedIncome.description}
          onChange={handleChange}
          rows="3"
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="save-button">Save Changes</button>
        <button type="button" onClick={onCancel} className="cancel-button">Cancel</button>
      </div>
    </form>
  );
};

export default EditIncomeForm;