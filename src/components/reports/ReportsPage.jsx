import React, { useContext } from 'react';
import { FinanceContext } from '../../context/FinanceContext';
import ReportGenerator from './ReportGenerator';

const ReportsPage = () => {
  const { incomes, expenses } = useContext(FinanceContext);

  return (
    <div className="reports-page">
      <h2>Financial Reports</h2>
      <ReportGenerator incomes={incomes} expenses={expenses} />
    </div>
  );
};

export default ReportsPage;
// This component will display the financial reports based on the incomes and expenses data.
// It uses the ReportGenerator component to generate and display the reports.