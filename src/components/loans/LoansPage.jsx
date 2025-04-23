import React, { useContext } from 'react';
import { FinanceContext } from '../../context/FinanceContext';
import LoanCard from './LoanCard';

const LoansPage = () => {
  const { loans, isLoading } = useContext(FinanceContext);

  return (
    <div className="loans-page">
      <h2>Available Loan Options</h2>
      {isLoading ? (
        <p>Loading loan options...</p>
      ) : (
        <div className="loan-grid">
          {loans.map(loan => (
            <LoanCard key={loan.id} loan={loan} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LoansPage;
// This component fetches and displays a list of available loan options.
// It uses the LoanCard component to display each loan's details.