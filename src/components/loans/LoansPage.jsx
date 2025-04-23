import React, { useContext } from 'react';
import { FinanceContext } from '../../context/FinanceContext';
import './LoansPage.css';

const LoansPage = () => {
  const { loans, isLoading, deleteLoan: deleteLoanHandler } = useContext(FinanceContext);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this loan?')) {
      await deleteLoanHandler(id);
    }
  };

  if (isLoading) return <div className="loans-page">Loading loans...</div>;

  return (
    <div className="loans-page">
      <h2>Available Loan Options</h2>
      
      <div className="loan-grid">
        {loans.map(loan => (
          <div key={loan.id} className="loan-card">
            <div className="loan-header">
              <span className="loan-title">{loan.name}</span>
              <span className="loan-bank">{loan.bank}</span>
            </div>
            
            <div className="loan-details">
              <div className="loan-detail">
                <span className="loan-detail-label">Interest Rate:</span>
                <span>{loan.interestRate}</span>
              </div>
              <div className="loan-detail">
                <span className="loan-detail-label">Term:</span>
                <span>{loan.term}</span>
              </div>
              <div className="loan-detail">
                <span className="loan-detail-label">Max Amount:</span>
                <span>KSH {loan.maxAmount}</span>
              </div>
              <div className="loan-detail">
                <span className="loan-detail-label">Requirements:</span>
                <span>{loan.requirements}</span>
              </div>
            </div>
            
            <div className="loan-actions">
              <button 
                className="delete-btn"
                onClick={() => handleDelete(loan.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoansPage;
