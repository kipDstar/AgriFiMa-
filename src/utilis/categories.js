// Ensure we export a proper categories object
const categories = {
  income: [
    { value: 'crop', label: 'Crop Sales' },
    { value: 'livestock', label: 'Livestock Products' },
    { value: 'dairy', label: 'Dairy Products' },
    { value: 'other', label: 'Other Income' }
  ],
  expense: [
    { value: 'seeds', label: 'Seeds' },
    { value: 'fertilizer', label: 'Fertilizer' },
    { value: 'labor', label: 'Labor' },
    { value: 'equipment', label: 'Equipment' },
    { value: 'other', label: 'Other Expenses' }
  ]
};

export default categories;
// This file contains the categories object used throughout the application.