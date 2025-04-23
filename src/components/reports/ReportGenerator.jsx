import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { FinanceContext } from '../../context/FinanceContext';
import { useContext, useState } from 'react';
import './Reports.css'; // Assuming you have some CSS for styling

const ReportGenerator = () => {
  const { incomes, expenses, calculateProfitLoss } = useContext(FinanceContext);
  const [reportType, setReportType] = useState('profitLoss');
  const [email, setEmail] = useState('');
  const reportRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => reportRef.current,
  });

  const generateReportData = () => {
    const { profit, loss, net } = calculateProfitLoss();
    
    switch(reportType) {
      case 'income':
        return incomes;
      case 'expenses':
        return expenses;
      case 'profitLoss':
        return { profit, loss, net };
      default:
        return {};
    }
  };

  const handleEmailReport = () => {
    // In a real app, this would send the report via email
    alert(`Report would be sent to ${email}`);
  };

  return (
    <div className="report-generator">
      <div className="report-controls">
        <select 
          value={reportType} 
          onChange={(e) => setReportType(e.target.value)}
        >
          <option value="profitLoss">Profit/Loss Report</option>
          <option value="income">Income Report</option>
          <option value="expenses">Expenses Report</option>
        </select>

        <button onClick={handlePrint} className="action-button">
          Print Report
        </button>

        <div className="email-section">
          <input
            type="email"
            placeholder="Enter email to send report"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button 
            onClick={handleEmailReport}
            className="action-button"
          >
            Email Report
          </button>
        </div>
      </div>

      <div className="report-content" ref={reportRef}>
        <h3>{reportType === 'profitLoss' ? 'Profit/Loss Report' : 
             reportType === 'income' ? 'Income Report' : 'Expenses Report'}</h3>
        
        {reportType === 'profitLoss' && (
          <div className="profit-loss-report">
            <p>Total Profit: KSH {generateReportData().profit.toFixed(2)}</p>
            <p>Total Loss: KSH {generateReportData().loss.toFixed(2)}</p>
            <p>Net: KSH {generateReportData().net.toFixed(2)}</p>
          </div>
        )}

        {(reportType === 'income' || reportType === 'expenses') && (
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>{reportType === 'income' ? 'Source' : 'Item'}</th>
                <th>Category</th>
                <th>Product</th>
                <th>Volume</th>
                <th>Amount (KSH)</th>
              </tr>
            </thead>
            <tbody>
              {generateReportData().map(item => (
                <tr key={item.id}>
                  <td>{item.date}</td>
                  <td>{reportType === 'income' ? item.source : item.item}</td>
                  <td>{item.category}</td>
                  <td>{item.product}</td>
                  <td>{item.volume}</td>
                  <td>{reportType === 'income' ? item.amount : item.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ReportGenerator;
// This component allows users to generate and print reports for income, expenses, or profit/loss.