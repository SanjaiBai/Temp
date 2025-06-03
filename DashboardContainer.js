// src/containers/DashboardContainer.js
import React from 'react';
import Dashboard from '../components/Dashboard';

const DashboardContainer = () => {
  const data = {
    pointBalance: 1200,
    redeemed: 300,
    expired: 150,
  };
  return <Dashboard {...data} />;
};

export default DashboardContainer;

// src/components/Dashboard.js
const Dashboard = ({ pointBalance, redeemed, expired }) => (
  <div>
    <h2>My Dashboard</h2>
    <p>Point Balance: {pointBalance}</p>
    <p>Points Redeemed: {redeemed}</p>
    <p>Points Expired (month end): {expired}</p>
  </div>
);

export default Dashboard;
