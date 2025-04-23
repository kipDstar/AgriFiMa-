import React, { useEffect, useState } from 'react';
import { getExpenses } from '../../api/expenseApi';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

const ExpensesPage = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchExpenses = async () => {
    try {
      setLoading(true);
      const data = await getExpenses();
      setExpenses(data);
    } catch (err) {
      setError('Failed to load expenses');
      console.error('Error fetching expenses:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleExpenseAdded = (newExpense) => {
    setExpenses(prev => [...prev, newExpense]);
  };

  if (loading) return <div>Loading expenses...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="expenses-page">
      <h2>Expense Tracking</h2>
      <ExpenseForm onExpenseAdded={handleExpenseAdded} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default ExpensesPage;
