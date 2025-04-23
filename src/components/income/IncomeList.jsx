import React, { useContext } from 'react';
import { FinanceContext } from '../../context/FinanceContext';

const IncomeList = () => {
  const { incomes, deleteIncome } = useContext(FinanceContext);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this income record?')) {
      await deleteIncome(id);
    }
  };

  // Safely format date
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    try {
      return new Date(dateString).toLocaleDateString();
    } catch {
      return 'Invalid Date';
    }
  };

  // Safely format amount
  const formatAmount = (amount) => {
    if (amount === null || amount === undefined) return 'N/A';
    return `KSH ${Number(amount).toLocaleString()}`;
  };

  return (
    <div className="income-list">
      <h3>Income Records</h3>
      {incomes?.length === 0 ? (
        <p>No income records found</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Source</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {incomes?.map(income => (
              <tr key={income.id || Math.random()}>
                <td>{formatDate(income.date)}</td>
                <td>{income.source || 'N/A'}</td>
                <td>{income.category || 'N/A'}</td>
                <td>{formatAmount(income.amount)}</td>
                <td>
                  <button 
                    onClick={() => handleDelete(income.id)}
                    className="delete-btn"
                    disabled={!income.id}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default IncomeList;
// This component displays a list of income records.