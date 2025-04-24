import React, { useContext } from 'react';
import { FinanceContext } from '../../context/FinanceContext';
import LoanCard from './LoanCard';
import './LoansStyles.css'; // Import the CSS

const LoansPage = () => {
  const { loans, isLoading } = useContext(FinanceContext);

  return (
    <div className="loans-page">
      <h2>Available Loan Options</h2>
      {isLoading ? (
        <p>Loading loan options...</p>
      ) : (
        <div className="loan-grid"> {/* Use the grid container */}
          {loans.map(loan => (
            <LoanCard key={loan.id} loan={loan} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LoansPage;