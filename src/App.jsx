import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FinanceProvider } from './context/FinanceContext';
import Dashboard from './components/dashboard/Dashboard';
import IncomePage from './components/income/IncomePage';
import ExpensesPage from './components/expenses/ExpensesPage';
import LoansPage from './components/loans/LoansPage';
import ReportsPage from './components/reports/ReportsPage';
import Navigation from './shared/Navigation';
import './App.css';

function App() {
  return (
    <FinanceProvider>
      <BrowserRouter>
        <div className="app-container">
          <Navigation/>
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/income" element={<IncomePage />} />
              <Route path="/expenses" element={<ExpensesPage />} />
              <Route path="/loans" element={<LoansPage />} />
              <Route path="/reports" element={<ReportsPage />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </FinanceProvider>
  );
}

export default App;
// This is the main entry point of the application. It sets up the routing and context provider for the app.
// The FinanceProvider wraps the entire application, allowing all components to access the finance context.
// The BrowserRouter is used for routing, and the Routes component defines the different routes available in the app.
// The Navigation component provides links to navigate between different pages.
// The main content area is where the different pages (Dashboard, Income, Expenses, Loans, Reports) will be rendered based on the current route.
// The CSS file is imported to style the application.