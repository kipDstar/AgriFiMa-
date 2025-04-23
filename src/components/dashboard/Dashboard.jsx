// 3. Dashboard.jsx with modern styling
import React, { useContext } from 'react';
import { FinanceContext } from '../../context/FinanceContext';
import ProfitLossChart from './ProfitLossChart';
import './Dashboard.css';

const Dashboard = () => {
  const { incomes, expenses, calculateProfitLoss } = useContext(FinanceContext);
  
  const totalIncome = incomes.reduce((sum, item) => sum + Number(item.amount), 0);
  const totalExpenses = expenses.reduce((sum, item) => sum + Number(item.cost), 0);
  const { net } = calculateProfitLoss();

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1>Financial Dashboard</h1>
          <div className="time-filter">
            <select>
              <option>Last 7 Days</option>
              <option>This Month</option>
              <option>Last Month</option>
              <option>This Year</option>
            </select>
          </div>
        </div>

        <div className="metrics-grid">
          <div className="metric-card income">
            <h3>Total Income</h3>
            <p className="metric-value">KSH {totalIncome.toLocaleString()}</p>
            <p className="metric-trend">↑ 12% from last month</p>
          </div>
          
          <div className="metric-card expenses">
            <h3>Total Expenses</h3>
            <p className="metric-value">KSH {totalExpenses.toLocaleString()}</p>
            <p className="metric-trend">↓ 5% from last month</p>
          </div>
          
          <div className="metric-card net">
            <h3>Net {net >= 0 ? 'Profit' : 'Loss'}</h3>
            <p className="metric-value">KSH {Math.abs(net).toLocaleString()}</p>
            <p className="metric-trend">
              {net >= 0 ? '↑ Profitable' : '↓ Needs Attention'}
            </p>
          </div>
        </div>

        <div className="chart-container">
          <ProfitLossChart incomes={incomes} expenses={expenses} />
        </div>

        <div className="quick-actions">
          <button className="action-button">
            <span>📋</span> Generate Report
          </button>
          <button className="action-button">
            <span>📩</span> Export Data
          </button>
          <button className="action-button primary">
            <span>➕</span> Add Transaction
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
