import React, { useState, useEffect } from 'react';
import categories from '../../utilis/categories';

const ExpenseForm = ({ expenseToEdit, onSubmit, onDelete }) => {
  const [expense, setExpense] = useState({
    item: '',
    category: 'seeds',
    cost: '',
    date: new Date().toISOString().split('T')[0],
    description: ''
  });

  useEffect(() => {
    if (expenseToEdit) {
      setExpense(expenseToEdit);
    }
  }, [expenseToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!expense.item || !expense.cost || !expense.date) {
      alert('Please fill all required fields');
      return;
    }

    const costValue = parseFloat(expense.cost);
    if (isNaN(costValue) || costValue <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    onSubmit({
      ...expense,
      cost: costValue,
      id: expense.id || Date.now()
    });

    if (!expenseToEdit) {
      setExpense({
        item: '',
        category: 'seeds',
        cost: '',
        date: new Date().toISOString().split('T')[0],
        description: ''
      });
    }
  };

  const handleDelete = () => {
    if (expense.id && window.confirm('Delete this expense record?')) {
      onDelete(expense.id);
      setExpense({
        item: '',
        category: 'seeds',
        cost: '',
        date: new Date().toISOString().split('T')[0],
        description: ''
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="finance-form">
      <div className="form-row">
        <div className="form-group">
          <label>Item*</label>
          <input
            type="text"
            name="item"
            value={expense.item}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Category*</label>
          <select
            name="category"
            value={expense.category}
            onChange={handleChange}
            required
          >
            {categories.expense.map(cat => (
              <option key={cat.value} value={cat.value}>{cat.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Cost (KSH)*</label>
          <input
            type="number"
            name="cost"
            value={expense.cost}
            onChange={handleChange}
            min="0"
            step="0.01"
            required
          />
        </div>

        <div className="form-group">
          <label>Date*</label>
          <input
            type="date"
            name="date"
            value={expense.date}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          name="description"
          value={expense.description}
          onChange={handleChange}
          rows="3"
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="submit-button">
          {expenseToEdit ? 'Update' : 'Add'} Expense
        </button>
        
        {expenseToEdit && (
          <button 
            type="button" 
            className="delete-button"
            onClick={handleDelete}
          >
            Delete
          </button>
        )}
      </div>
    </form>
  );
};

export default ExpenseForm;
// This component manages the expense form functionality.
// It includes fields for item, category, cost, date, and description.