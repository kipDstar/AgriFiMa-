import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const fetchIncomes = async () => {
  const response = await axios.get(`${API_URL}/incomes`);
  return response.data;
};

export const addIncome = async (income) => {
  const response = await axios.post(`${API_URL}/incomes`, income);
  return response.data;
};

export const fetchExpenses = async () => {
  const response = await axios.get(`${API_URL}/expenses`);
  return response.data;
};

export const addExpense = async (expense) => {
  const response = await axios.post(`${API_URL}/expenses`, expense);
  return response.data;
};

export const fetchLoans = async () => {
  const response = await axios.get(`${API_URL}/loans`);
  return response.data;
};
