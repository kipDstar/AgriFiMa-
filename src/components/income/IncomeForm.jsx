// 5. FINALLY, the corrected IncomeForm.jsx with guaranteed working submission
import React, { useState } from 'react';
import categories  from '../../utilis/categories';

const IncomeForm = ({ onSubmit }) => {
  const [income, setIncome] = useState({
    source: '',
    category: 'crop',
    amount: '',
    date: new Date().toISOString().split('T')[0],
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIncome(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    // First check if we received an event object
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    // Validate required fields
    if (!income.source || !income.amount || !income.date) {
      alert('Please fill all required fields');
      return;
    }

    // Convert amount to number
    const amountValue = parseFloat(income.amount);
    if (isNaN(amountValue) || amountValue <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    // Prepare submission data
    const submissionData = {
      ...income,
      amount: amountValue,
      id: Date.now(),
      timestamp: new Date().toISOString()
    };

    // Call the onSubmit prop
    if (onSubmit && typeof onSubmit === 'function') {
      onSubmit(submissionData);
    }

    // Reset form
    setIncome({
      source: '',
      category: 'crop',
      amount: '',
      date: new Date().toISOString().split('T')[0],
      description: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="income-form">
      <div className="form-group">
        <label>Income Source*</label>
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
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>

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

      <div className="form-group">
        <label>Description</label>
        <textarea
          name="description"
          value={income.description}
          onChange={handleChange}
          rows="3"
        />
      </div>

      <button type="submit" className="submit-button">
        Record Income
      </button>
    </form>
  );
};

export default IncomeForm;
