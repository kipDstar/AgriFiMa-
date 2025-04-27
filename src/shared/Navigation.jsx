// 1. First, the Navigation.jsx with integrated information/slideshow
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const features = [
    {
      title: "Income Tracking",
      description: "Log all your farm earnings",
      icon: "💰"
    },
    {
      title: "Expense Management",
      description: "Monitor farming costs",
      icon: "📊"
    },
    {
      title: "Profit Analysis",
      description: "Clear financial insights",
      icon: "📈"
    },
    {
      title: "Loan Options",
      description: "Discover financing",
      icon: "🏦"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <nav className={`app-navigation ${isCollapsed ? 'collapsed' : ''}`}>
      <button 
        className="collapse-toggle"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? '☰' : '✕'}
      </button>

      {!isCollapsed && (
        <>
          <div className="nav-header">
            <h2>AgriFIMA</h2>
            <p>Farm Finance Manager</p>
          </div>

          <div className="feature-slideshow">
            <div className="slide-container">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`slide ${index === currentSlide ? 'active' : ''}`}
                >
                  <span className="feature-icon">{feature.icon}</span>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
            <div className="slide-dots">
              {features.map((_, index) => (
                <span 
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </>
      )}

      <ul className="nav-links">
        <li>
          <Link to="/">
            <span className="nav-icon">📊</span>
            {!isCollapsed && <span className="nav-text">Dashboard</span>}
          </Link>
        </li>
        <li>
          <Link to="/income">
            <span className="nav-icon">💰</span>
            {!isCollapsed && <span className="nav-text">Income</span>}
          </Link>
        </li>
        <li>
          <Link to="/expenses">
            <span className="nav-icon">💸</span>
            {!isCollapsed && <span className="nav-text">Expenses</span>}
          </Link>
        </li>
        <li>
          <Link to="/loans">
            <span className="nav-icon">🏦</span>
            {!isCollapsed && <span className="nav-text">Loans</span>}
          </Link>
        </li>
        <li>
          <Link to="/reports">
            <span className="nav-icon">📄</span>
            {!isCollapsed && <span className="nav-text">Reports</span>}
          </Link>
        </li>
      </ul>

      {!isCollapsed && (
        <div className="nav-footer">
          <p>Need help? Contact support:GROUP 3</p>
          <small>v1.0.0</small>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
