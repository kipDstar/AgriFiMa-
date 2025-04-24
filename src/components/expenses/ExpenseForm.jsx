import React, { useState } from 'react';
import { createExpense } from '../../api/expenseApi';
import categories from '../../utilis/categories';

const ExpenseForm = ({ onExpenseAdded }) => {
  const [formData, setFormData] = useState({
    item: '',
    category: 'seeds',
    cost: '',
    date: new Date().toISOString().split('T')[0]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    // Prevent default form submission behavior
    e.preventDefault();
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      const expenseData = {
        ...formData,
        cost: parseFloat(formData.cost),
        date: new Date(formData.date).toISOString()
      };
      console.log("Expense Data being sent:", expenseData);
      
      const createdExpense = await createExpense(expenseData);
      onExpenseAdded(createdExpense);
      
      // Reset form
      setFormData({
        item: '',
        category: 'seeds',
        cost: '',
        date: new Date().toISOString().split('T')[0]
      });
    } catch (err) {
      setError('Failed to save expense. Please try again.');
      console.error('Error submitting expense:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="finance-form">
      {error && <div className="error-message">{error}</div>}
      
      <div className="form-group">
        <label>Item</label>
        <input
          type="text"
          name="item"
          value={formData.item}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
      </div>

      <div className="form-group">
        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        >
          {categories.expense.map(cat => (
            <option key={cat.value} value={cat.value}>{cat.label}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Cost (KSH)</label>
        <input
          type="number"
          name="cost"
          value={formData.cost}
          onChange={handleChange}
          min="0"
          step="1"
          required
          disabled={isSubmitting}
        />
      </div>

      <div className="form-group">
        <label>Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
      </div>

      <button 
        type="submit" 
        className="submit-button"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Saving...' : 'Add Expense'}
      </button>
    </form>
  );
};

export default ExpenseForm;
