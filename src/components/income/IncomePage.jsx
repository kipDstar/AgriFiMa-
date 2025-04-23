import React, { useState, useContext } from 'react';
import { FinanceContext } from '../../context/FinanceContext';
import IncomeForm from './IncomeForm';
import IncomeList from './IncomeList';

const IncomePage = () => {
  const { incomes, addIncome } = useContext(FinanceContext);
  const [newIncome, setNewIncome] = useState({
    source: '',
    amount: '',
    date: new Date().toISOString().split('T')[0],
    description: ''
  });

  const handleIncomeSubmit = (e, submittedIncome) => { // Receive 'e' as the first argument
    e.preventDefault();
    addIncome({
      ...submittedIncome, // Use the submitted data
      id: Date.now()
    });
    setNewIncome({
      source: '',
      amount: '',
      date: new Date().toISOString().split('T')[0],
      description: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewIncome(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="income-page">
      <h2>Income Tracking</h2>
      <IncomeForm
        income={newIncome}
        onChange={handleChange}
        onSubmit={handleIncomeSubmit}
      />
      <IncomeList incomes={incomes} />
    </div>
  );
};

export default IncomePage;
// This component is responsible for rendering the income tracking page.