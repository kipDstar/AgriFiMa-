import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { fetchLoans } from '../api/loanApi'; // Import fetchLoans

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [loans, setLoans] = useState([]); // Add loans state
  const [isLoadingLoans, setIsLoadingLoans] = useState(true); // Add loading state for loans
  const [errorLoans, setErrorLoans] = useState(null); // Add error state for loans

  const fetchIncomes = async () => {
    try {
      const response = await axios.get('http://localhost:3001/incomes');
      setIncomes(response.data);
    } catch (error) {
      console.error('Error fetching incomes:', error);
    }
  };

  const addIncome = async (income) => {
    try {
      const response = await axios.post('http://localhost:3001/incomes', income);
      setIncomes([...incomes, response.data]);
    } catch (error) {
      console.error('Error adding income:', error);
    }
  };

  const deleteIncome = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/incomes/${id}`);
      setIncomes(incomes.filter(income => income.id !== id));
    } catch (error) {
      console.error('Error deleting income:', error);
    }
  };

  const updateIncome = async (updatedIncome) => {
    try {
      await axios.put(`http://localhost:3001/incomes/${updatedIncome.id}`, updatedIncome);
      setIncomes(incomes.map(income =>
        income.id === updatedIncome.id ? updatedIncome : income
      ));
    } catch (error) {
      console.error('Error updating income:', error);
    }
  };

  const fetchExpenses = async () => {
    try {
      const response = await axios.get('http://localhost:3001/expenses');
      setExpenses(response.data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  const addExpense = async (expense) => {
    try {
      const response = await axios.post('http://localhost:3001/expenses', expense);
      setExpenses([...expenses, response.data]);
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  const deleteExpense = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/expenses/${id}`);
      setExpenses(expenses.filter(expense => expense.id !== id));
    } catch (error) {
      console.error('Error deleting expense:', error);
    }
  };

  const updateExpense = async (updatedExpense) => {
    try {
      await axios.put(`http://localhost:3001/expenses/${updatedExpense.id}`, updatedExpense);
      setExpenses(expenses.map(expense =>
        expense.id === updatedExpense.id ? updatedExpense : expense
      ));
    } catch (error) {
      console.error('Error updating expense:', error);
    }
  };

  const calculateProfitLoss = () => {
    const totalIncome = incomes.reduce((sum, income) => sum + parseFloat(income.amount || 0), 0);
    const totalExpenses = expenses.reduce((sum, expense) => sum + parseFloat(expense.cost || 0), 0);
    const profit = totalIncome - totalExpenses;
    const loss = totalExpenses - totalIncome > 0 ? totalExpenses - totalIncome : 0;
    const net = profit;

    return { profit, loss, net };
  };

  useEffect(() => {
    fetchIncomes();
    fetchExpenses();

    const getLoansData = async () => {
      try {
        const data = await fetchLoans();
        setLoans(data);
        setIsLoadingLoans(false);
      } catch (error) {
        setErrorLoans(error.message || 'Failed to fetch loans');
        setIsLoadingLoans(false);
      }
    };

    getLoansData();
  }, []);

  return (
    <FinanceContext.Provider
      value={{
        incomes,
        expenses,
        loans, // Provide loans state
        isLoading: isLoadingLoans, // Provide loading state for loans
        errorLoans, // Provide error state for loans
        addIncome,
        deleteIncome,
        updateIncome,
        addExpense,
        deleteExpense,
        updateExpense,
        calculateProfitLoss,
        fetchExpenses,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};