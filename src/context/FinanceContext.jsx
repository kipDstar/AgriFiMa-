import React, { createContext, useState, useEffect } from 'react';
import { 
  fetchIncomes, addIncome, deleteIncome,
  fetchExpenses, addExpense, deleteExpense
} from '../api/apiService';

export const FinanceContext = createContext();

export function FinanceProvider({ children }) {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Load initial data
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const [incomeData, expenseData] = await Promise.all([
          fetchIncomes(),
          fetchExpenses()
        ]);
        setIncomes(incomeData);
        setExpenses(expenseData);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  // Income methods
  const handleAddIncome = async (income) => {
    try {
      const newIncome = await addIncome(income);
      setIncomes(prev => [...prev, newIncome]);
      return newIncome;
    } catch (error) {
      console.error('Error adding income:', error);
      throw error;
    }
  };

  const handleDeleteIncome = async (id) => {
    try {
      await deleteIncome(id);
      setIncomes(prev => prev.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting income:', error);
      throw error;
    }
  };

  // Expense methods
  const handleAddExpense = async (expense) => {
    try {
      const newExpense = await addExpense(expense);
      setExpenses(prev => [...prev, newExpense]);
      return newExpense;
    } catch (error) {
      console.error('Error adding expense:', error);
      throw error;
    }
  };

  const handleDeleteExpense = async (id) => {
    try {
      await deleteExpense(id);
      setExpenses(prev => prev.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting expense:', error);
      throw error;
    }
  };

  return (
    <FinanceContext.Provider
      value={{
        incomes,
        expenses,
        isLoading,
        addIncome: handleAddIncome,
        deleteIncome: handleDeleteIncome,
        addExpense: handleAddExpense,
        deleteExpense: handleDeleteExpense,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
}