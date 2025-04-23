export const fetchLoans = async () => {
    // In a real app, this would be a fetch to your backend API
    // For now, we'll return mock data
    return [
      {
        id: 1,
        bank: 'KCB',
        name: 'Agri-Business Loan',
        interestRate: '12%',
        image: 'https://farmersreviewafrica.com/wp-content/uploads/2023/05/Financing_Arti-234.jpg',
        term: '24 months',
        maxAmount: '500,000',
        requirements: 'Farm registration, 6 months bank statements'
      },
      {
        id: 2,
        bank: 'COOP',
        name: 'Farm Input Loan',
        interestRate: '10%',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUZxYuszVhXkfq4ZwiQzcbVXUTgqwYn_TKFA&s',
        term: '12 months',
        maxAmount: '200,000',
        requirements: 'Membership, land title'
      },
      {
        id: 3,
        bank: 'Equity',
        name: 'Livestock Financing',
        interestRate: '14%',
        term: '36 months',
        maxAmount: '1,000,000',
        requirements: 'Vet approval, business plan'
      },
      {
        id: 4,
        bank: 'NCBA',
        name: 'Machinery Loan',
        interestRate: '11%',
        term: '48 months',
        maxAmount: '2,000,000',
        requirements: 'Purchase agreement, insurance'
      },
      {
        id: 5,
        bank: 'Stanbic',
        name: 'Green Energy Loan',
        interestRate: '9%',
        term: '60 months',
        maxAmount: '1,500,000',
        requirements: 'Project proposal, environmental impact assessment'
      }
    ];
  };
  