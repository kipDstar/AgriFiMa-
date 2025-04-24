import React, { useState, useContext } from 'react';
import { FinanceContext } from '../../context/FinanceContext';
import IncomeForm from './IncomeForm';
import IncomeList from './IncomeList';
import EditIncomeForm from './EditIncomeForm'; 

const IncomePage = () => {
  const { incomes, addIncome, deleteIncome, updateIncome } = useContext(FinanceContext);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIncome, setCurrentIncome] = useState(null);
  const [newIncome, setNewIncome] = useState({
    source: '',
    amount: '',
    date: new Date().toISOString().split('T')[0],
    description: '',
    product: '',
    volume: ''
  });

  const handleIncomeSubmit = (e, submittedIncome) => {
    e.preventDefault();
    addIncome({
      ...submittedIncome,
      id: Date.now()
    });
    setNewIncome({
      source: '',
      amount: '',
      date: new Date().toISOString().split('T')[0],
      description: '',
      product: '',
      volume: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewIncome(prev => ({ ...prev, [name]: value }));
  };

  const handleDeleteIncome = (id) => {
    deleteIncome(id);
  };

  const handleEditIncome = (income) => {
    setCurrentIncome(income);
    setIsEditing(true);
  };

  const handleUpdateIncome = (e, updatedIncome) => {
    e.preventDefault();
    updateIncome(updatedIncome);
    setIsEditing(false);
    setCurrentIncome(null);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setCurrentIncome(null);
  };

  return (
    <div className="income-page">
      <h2>Income Tracking</h2>
      {!isEditing ? (
        <IncomeForm
          income={newIncome}
          onChange={handleChange}
          onSubmit={handleIncomeSubmit}
        />
      ) : (
        <EditIncomeForm
          income={currentIncome}
          onUpdateIncome={handleUpdateIncome}
          onCancel={handleCancelEdit}
        />
      )}
      <IncomeList
        incomes={incomes}
        onDeleteIncome={handleDeleteIncome}
        onEditIncome={handleEditIncome}
      />
    </div>
  );
};

export default IncomePage;