import React, { useState, useContext } from 'react';
import { FinanceContext } from '../../context/FinanceContext';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import EditExpenseForm from './EditExpenseForm';

const ExpensesPage = () => {
  const { expenses, addExpense, deleteExpense, updateExpense, fetchExpenses } = useContext(FinanceContext);
  const [isEditing, setIsEditing] = useState(false);
  const [currentExpense, setCurrentExpense] = useState(null);

  const handleExpenseAdded = async (newExpense) => {
    try {
      await addExpense(newExpense);
      // After successfully adding, re-fetch the expenses list
      fetchExpenses();
    } catch (error) {
      console.error('Error adding expense:', error);
      // Handle the error (display an error message to the user)
    }
  };


  const handleDeleteExpense = (id) => {
    deleteExpense(id);
  };

  const handleEditExpense = (expense) => {
    setCurrentExpense(expense);
    setIsEditing(true);
  };

  const handleUpdateExpense = (e, updatedExpense) => {
    e.preventDefault();
    updateExpense(updatedExpense);
    setIsEditing(false);
    setCurrentExpense(null);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setCurrentExpense(null);
  };

  return (
    <div className="expenses-page">
      <h2>Expense Tracking</h2>
      {!isEditing ? (
        <ExpenseForm onExpenseAdded={handleExpenseAdded} /> // Passes function to handle adding expenses
      ) : (
        <EditExpenseForm
          expense={currentExpense}
          onUpdateExpense={handleUpdateExpense}
          onCancel={handleCancelEdit}
        />
      )}
      <ExpenseList
        expenses={expenses}
        onDeleteExpense={handleDeleteExpense}
        onEditExpense={handleEditExpense}
      />
    </div>
  );
};

export default ExpensesPage;