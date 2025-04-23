// src/api/loanApi.js
export const fetchLoans = async () => {
  // In a real app, this would be a fetch to your backend API
  return [
    {
      id: 1,
      bank: 'KCB Bank',
      name: 'Agri-Advance Loan',
      interestRate: '9.5%',
      term: '12-36 months',
      maxAmount: '2,000,000',
      requirements: ['Farm registration', '6 months bank statements', 'Business plan'],
      features: ['Flexible repayment', 'Insurance included', '3-month grace period'],
      logo: 'kcb-logo.png'
    },
    {
      id: 2,
      bank: 'Equity Bank',
      name: 'Farm Input Financing',
      interestRate: '11%',
      term: '6-24 months',
      maxAmount: '1,500,000',
      requirements: ['Title deed', '2 years farming experience', 'KRA PIN'],
      features: ['Inputs delivered to farm', 'Technical support', 'Weather insurance'],
      logo: 'equity-logo.png'
    },
    {
      id: 3,
      bank: 'Cooperative Bank',
      name: 'Livestock Development Loan',
      interestRate: '8.5%',
      term: '12-48 months',
      maxAmount: '5,000,000',
      requirements: ['Veterinary records', 'Land ownership proof', 'Co-op membership'],
      features: ['Vet services included', 'Feed subsidies', 'Market access'],
      logo: 'coop-logo.png'
    },
    {
      id: 4,
      bank: 'ABC Bank',
      name: 'Greenhouse Financing',
      interestRate: '10.25%',
      term: '24-60 months',
      maxAmount: '3,500,000',
      requirements: ['Land lease agreement', 'Water rights', 'Technical proposal'],
      features: ['Installment payments', 'Maintenance training', 'Yield insurance'],
      logo: 'abc-logo.png'
    },
    {
      id: 5,
      bank: 'National Bank',
      name: 'Agri-Value Chain Loan',
      interestRate: '12%',
      term: '3-12 months',
      maxAmount: '800,000',
      requirements: ['Off-taker agreement', '3 months sales records'],
      features: ['Quick disbursement', 'No collateral', 'Mobile payments'],
      logo: 'national-logo.png'
    }
  ];
};
// This function fetches loan options from a mock API.