// 1. First, update apiService.js with all CRUD operations
import axios from 'axios';

const API_BASE = 'http://localhost:3001';

// Income API
export const fetchIncomes = async () => {
  const response = await axios.get(`${API_BASE}/incomes`);
  return response.data;
};

export const addIncome = async (income) => {
  const response = await axios.post(`${API_BASE}/incomes`, income);
  return response.data;
};

export const deleteIncome = async (id) => {
  await axios.delete(`${API_BASE}/incomes/${id}`);
  return id;
};

// Expense API
export const fetchExpenses = async () => {
  const response = await axios.get(`${API_BASE}/expenses`);
  return response.data;
};

export const addExpense = async (expense) => {
  const response = await axios.post(`${API_BASE}/expenses`, expense);
  return response.data;
};

export const deleteExpense = async (id) => {
  await axios.delete(`${API_BASE}/expenses/${id}`);
  return id;
};

// Loan API
export const fetchLoans = async () => {
  const response = await axios.get(`${API_BASE}/loans`);
  return response.data;
};

export const deleteLoan = async (id) => {
  await axios.delete(`${API_BASE}/loans/${id}`);
  return id;
};
//export const addLoan = async (loan) => {
  //const response = await axios.post(`${API_BASE}/loans`, loan);
  //return response.data;
//};
//export const updateLoan = async (id, loan) => {
  //const response = await axios.put(`${API_BASE}/loans/${id}`, loan);
  //return response.data;
//};