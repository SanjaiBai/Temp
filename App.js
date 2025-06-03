import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import DashboardContainer from './containers/DashboardContainer';
import RedeemPointsContainer from './containers/RedeemPointsContainer';
import ReportsContainer from './containers/ReportsContainer';
import PromotionsContainer from './containers/PromotionsContainer';
import { isAuthenticated } from './utils/auth';

function PrivateRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/" />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute><DashboardContainer /></PrivateRoute>} />
        <Route path="/redeem" element={<PrivateRoute><RedeemPointsContainer /></PrivateRoute>} />
        <Route path="/reports" element={<PrivateRoute><ReportsContainer /></PrivateRoute>} />
        <Route path="/promotions" element={<PrivateRoute><PromotionsContainer /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
