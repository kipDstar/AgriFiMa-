import React from 'react';
//import './LoanCard.css';

const LoanCard = ({ loan }) => {
  return (
    <div className="loan-card">
        <img src={loan.image} alt={loan.name} className="loan-image" />
      <h3>{loan.name}</h3>
      <p><strong>Bank:</strong> {loan.bank}</p>
      <p><strong>Interest Rate:</strong> {loan.interestRate}</p>
      <p><strong>Max Amount:</strong> KSh {loan.maxAmount.toLocaleString()}</p>
      <p><strong>Term:</strong> {loan.term}</p>
      <p><strong>Requirements:</strong> {loan.requirements}</p>
    </div>
  );
};

export default LoanCard;
// This component displays the details of a loan option.
// It includes the bank name, interest rate, maximum amount, term, and requirements.