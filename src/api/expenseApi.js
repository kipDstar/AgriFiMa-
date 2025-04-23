import axios from 'axios';

const API_BASE = 'http://localhost:3001';

export const getExpenses = async () => {
  try {
    const response = await axios.get(`${API_BASE}/expenses`);
    return response.data;
  } catch (error) {
    console.error('Error fetching expenses:', error);
    throw error;
  }
};

export const createExpense = async (expenseData) => {
  try {
    const response = await axios.post(`${API_BASE}/expenses`, expenseData);
    return response.data;
  } catch (error) {
    console.error('Error creating expense:', error);
    throw error;
  }
};
export const updateExpense = async (id, expenseData) => {
  try {
    const response = await axios.put(`${API_BASE}/expenses/${id}`, expenseData);
    return response.data;
  } catch (error) {
    console.error('Error updating expense:', error);
    throw error;
  }
};
export const deleteExpense = async (id) => {
  try {
    await axios.delete(`${API_BASE}/expenses/${id}`);
  } catch (error) {
    console.error('Error deleting expense:', error);
    throw error;
  }
};