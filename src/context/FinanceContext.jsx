import React, { createContext, useState, useEffect } from 'react';
import { 
  fetchIncomes, 
  fetchExpenses, 
  fetchLoans,
  addIncome as apiAddIncome,
  addExpense as apiAddExpense
} from '../api/apiService';

export const FinanceContext = createContext();

export function FinanceProvider({ children }) {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [loans, setLoans] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const [incomeData, expenseData, loanData] = await Promise.all([
          fetchIncomes(),
          fetchExpenses(),
          fetchLoans()
        ]);
        setIncomes(incomeData);
        setExpenses(expenseData);
        setLoans(loanData);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  const addIncome = async (income) => {
    try {
      const newIncome = await apiAddIncome(income);
      setIncomes(prev => [...prev, newIncome]);
    } catch (error) {
      console.error('Error adding income:', error);
    }
  };

  const addExpense = async (expense) => {
    try {
      const newExpense = await apiAddExpense(expense);
      setExpenses(prev => [...prev, newExpense]);
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  const calculateProfitLoss = () => {
    const totalIncome = incomes.reduce((sum, item) => sum + Number(item.amount), 0);
    const totalExpenses = expenses.reduce((sum, item) => sum + Number(item.cost), 0);
    return {
      profit: totalIncome > totalExpenses ? totalIncome - totalExpenses : 0,
      loss: totalExpenses > totalIncome ? totalExpenses - totalIncome : 0,
      net: totalIncome - totalExpenses
    };
  };

  return (
    <FinanceContext.Provider
      value={{
        incomes,
        expenses,
        loans,
        isLoading,
        addIncome,
        addExpense,
        calculateProfitLoss
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
}
// This context provides the financial data and functions to manage incomes, expenses, and loans.
// It fetches data from the API and provides functions to add new incomes and expenses.