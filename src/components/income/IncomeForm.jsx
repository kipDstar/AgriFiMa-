import React, { useState } from 'react';
import categories from '../../utilis/categories';

const IncomeForm = ({ onSubmit, income: initialIncome, onChange: onInputChange }) => {
  const [income, setIncome] = useState(initialIncome || {
    source: '',
    category: 'crop',
    product: '', // New field
    volume: '',   // New field
    amount: '',
    date: new Date().toISOString().split('T')[0],
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIncome(prev => ({ ...prev, [name]: value }));
    if (onInputChange) {
      onInputChange(e);
    }
  };

  const handleSubmit = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    if (!income.source || !income.amount || !income.date || !income.category) {
      alert('Please fill all required fields (Source, Category, Amount, Date)');
      return;
    }

    const amountValue = parseFloat(income.amount);
    if (isNaN(amountValue) || amountValue <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    // Ensure volume is a number if entered
    const volumeValue = income.volume ? parseFloat(income.volume) : '';
    if (income.volume && (isNaN(volumeValue) || volumeValue < 0)) {
      alert('Please enter a valid volume');
      return;
    }

    const submissionData = {
      ...income,
      amount: amountValue,
      volume: volumeValue, // Include volume in submission
      id: Date.now(),
      timestamp: new Date().toISOString()
    };

    if (onSubmit && typeof onSubmit === 'function') {
      onSubmit(e, submissionData);
    }

    setIncome({
      source: '',
      category: 'crop',
      product: '',
      volume: '',
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

      {/* New Product Input */}
      <div className="form-group">
        <label>Product</label>
        <input
          type="text"
          name="product"
          value={income.product}
          onChange={handleChange}
        />
      </div>

      {/* New Volume (kg) Input */}
      <div className="form-group">
        <label>Volume (kg)</label>
        <input
          type="number"
          name="volume"
          value={income.volume}
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