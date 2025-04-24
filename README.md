# Agri-Finance Tracker
🚜 Project Overview
- AgriFiMa is a Single Page Application (SPA) built with React to provide small-scale farmers and agricultural businesses with the tools they need to effectively manage their finances and explore loan opportunities. The application focuses on an intuitive user experience, making financial management accessible to users with varying levels of financial literacy.

## Features(overview)
- Income Tracking: Easily record income sources (e.g., crop sales, livestock) with details like source, amount, and date.
- Expense Tracking: Log farming-related expenses (e.g., seeds, fertilizer, labor) with item, cost, and date.
- Profit/Loss Overview: View a clear summary of income versus expenses over a selected period.
- Loan Options: Discover a list of financing opportunities from local banks, including interest rates and terms.
- Financial Report Generation: Generate basic reports like income/expense statements and profit/loss summaries.

## Setup
## Front-End Deployment

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## Deployment
## Backend Deployment (MOCK)

1. Run `npm install` to install dependencies
2. Start both React app and JSON server:
   ```bash
   npm run server
   ```
3. Access app at `http://localhost:3000`
4. API endpoints at `http://localhost:3001`

### Vercel Deployment
1. Install Vercel CLI: `npm install -g vercel`
2. Build your project: `npm run build`
3. Deploy: `vercel`
4. Set environment variables for API endpoints if needed

## Mock API Endpoints
- GET `/incomes` - Fetch all income records
- POST `/incomes` - Add new income
- GET `/expenses` - Fetch all expense records
- POST `/expenses` - Add new expense
- GET `/loans` - Fetch available loan options

## Project Structure
- `src/api/` - API service functions
- `src/components/` - React components
- `src/context/` - State management
- `src/utilis/` - Helper functions
- `db.json` - Mock database
- `src/context/` - Handling context

## Web Page screenshot
![alt text](image.png)

## 🛠️ Tech Stack & Design
- Frontend: React, JavaScript, HTML, CSS
- Routing: react-router-dom (for client-side navigation)
- Backend (Mock): json-server (for simulating loan data and potentially storing income/expense data)
- API Communication: fetch API
- Component-Based Architecture: Organized into reusable components (e.g., IncomeForm, ExpenseList, OpportunityCard, ReportVie  Dashboard).
- State Management: useState hook for managing component-level state.
- Data Fetching: useEffect hook for handling API calls.
- Deployment: Vercel (for hosting the React frontend).

## 💡 Feature Breakdown & Implementation Details

- Income Tracking: Utilizes IncomeForm component with useState for controlled input fields (source, amount, date). handleInputChange - updates state, handleSubmit collects data and (optionally) sends a POST request.
- Expense Tracking: Employs ExpenseForm with similar controlled component logic (useState, handleInputChange, handleSubmit) for recording expenses (item, cost, date). ExpenseList will display recorded expenses.
- Profit/Loss Overview: The ProfitLossView component receives income and expense data as props and uses a calculateProfitLoss function (likely in a utility or parent component) to display the calculated profit or loss. Conditional rendering will indicate profit or loss status.
- Loan Opportunities: The OpportunityList component uses useState to store fetched loan data and useEffect with the fetch API to retrieve data from the json-server endpoint. The map() function renders individual OpportunityCard components, passing loan details as props.
- Financial Report Generation: The ReportView component manages report display and potentially filtering via useState. Functions like  filterDataByDate and generateReport will process and format income and expense data for presentation.

## License

MIT License

Copyright (c) 2025 Jesse Kipsang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.