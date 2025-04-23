import React, { useState, useEffect } from 'react';
import categories from '../../utilis/categories';

const IncomeForm = ({ incomeToEdit, onSubmit, onDelete }) => {
  const [income, setIncome] = useState({
    source: '',
    category: 'crop',
    amount: '',
    date: new Date().toISOString().split('T')[0],
    description: ''
  });

  useEffect(() => {
    if (incomeToEdit) {
      setIncome(incomeToEdit);
    }
  }, [incomeToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIncome(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!income.source || !income.amount || !income.date) {
      alert('Please fill all required fields');
      return;
    }

    const amountValue = parseFloat(income.amount);
    if (isNaN(amountValue) || amountValue <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    onSubmit({
      ...income,
      amount: amountValue,
      id: income.id || Date.now()
    });

    if (!incomeToEdit) {
      setIncome({
        source: '',
        category: 'crop',
        amount: '',
        date: new Date().toISOString().split('T')[0],
        description: ''
      });
    }
  };

  const handleDelete = () => {
    if (income.id && window.confirm('Delete this income record?')) {
      onDelete(income.id);
      setIncome({
        source: '',
        category: 'crop',
        amount: '',
        date: new Date().toISOString().split('T')[0],
        description: ''
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="finance-form">
      <div className="form-row">
        <div className="form-group">
          <label>Source*</label>
          <input
            type="text"
            name="source"
            value={income.source}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Category*</label>
          <select
            name="category"
            value={income.category}
            onChange={handleChange}
            required
          >
            {categories.income.map(cat => (
              <option key={cat.value} value={cat.value}>{cat.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Amount (KSH)*</label>
          <input
            type="number"
            name="amount"
            value={income.amount}
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
            value={income.date}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          name="description"
          value={income.description}
          onChange={handleChange}
          rows="3"
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="submit-button">
          {incomeToEdit ? 'Update' : 'Add'} Income
        </button>
        
        {incomeToEdit && (
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

export default IncomeForm;
// This component handles the form for adding or editing income records.
// It includes validation for required fields and amount format.