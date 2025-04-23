import React from 'react';
//import './SummaryCard.css';

const SummaryCard = ({ title, value, isCurrency, isProfit }) => {
  const formattedValue = isCurrency 
    ? `KSh ${value.toLocaleString()}`
    : value;

  return (
    <div className={`summary-card ${isProfit ? 'profit' : isProfit === false ? 'loss' : ''}`}>
      <h3>{title}</h3>
      <p>{formattedValue}</p>
    </div>
  );
};

export default SummaryCard;
