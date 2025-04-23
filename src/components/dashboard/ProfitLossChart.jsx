import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ProfitLossChart = ({ incomes, expenses }) => {
  const incomeTotal = incomes.reduce((sum, item) => sum + item.amount, 0);
  const expenseTotal = expenses.reduce((sum, item) => sum + item.cost, 0);
  const profitLoss = incomeTotal - expenseTotal;

  const data = {
    labels: ['Income', 'Expenses', 'Profit/Loss'],
    datasets: [
      {
        label: 'Amount (KSh)',
        data: [incomeTotal, expenseTotal, profitLoss],
        backgroundColor: [
          '#4CAF50',
          '#F44336',
          profitLoss >= 0 ? '#4CAF50' : '#F44336'
        ],
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Financial Overview',
      },
    },
  };

  return <Bar options={options} data={data} />;
};

export default ProfitLossChart;
// This component displays a bar chart showing the total income, expenses, and profit/loss.
// It uses Chart.js to create the chart and takes incomes and expenses as props.