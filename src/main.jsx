import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Import your main App component

// This is where your React application is initialized and rendered.
// ReactDOM.createRoot is the modern way to render React apps.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* The App component contains all the portfolio content and logic */}
    <App />
  </React.StrictMode>,
);
