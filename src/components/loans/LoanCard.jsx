// src/components/loans/LoanCard.jsx
import React from 'react';
import './LoanCard.css';

const LoanCard = ({ loan }) => {
  return (
    <div className="loan-card">
      <div className="loan-header">
        <div className="bank-logo">
          <img src={`/logos/${loan.logo}`} alt={`${loan.bank} logo`} />
        </div>
        <div className="bank-info">
          <h3>{loan.bank}</h3>
          <p className="loan-name">{loan.name}</p>
        </div>
      </div>

      <div className="loan-details">
        <div className="detail-row">
          <span>Interest Rate</span>
          <span className="highlight">{loan.interestRate}</span>
        </div>
        <div className="detail-row">
          <span>Maximum Amount</span>
          <span className="highlight">KSH {loan.maxAmount}</span>
        </div>
        <div className="detail-row">
          <span>Term</span>
          <span>{loan.term}</span>
        </div>
      </div>

      <div className="loan-features">
        <h4>Key Features:</h4>
        <ul>
          {loan.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="loan-requirements">
        <h4>Requirements:</h4>
        <ul>
          {loan.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>

      <button className="apply-btn">Apply Now</button>
    </div>
  );
};

export default LoanCard;
