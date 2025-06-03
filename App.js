// File: src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import RedeemPoints from './containers/RedeemPoints';
import Reports from './containers/Reports';
import Promotions from './containers/Promotions';

const isLoggedIn = () => localStorage.getItem('isAuthenticated') === 'true';

const ProtectedRoute = ({ children }) => {
  return isLoggedIn() ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
        />
        <Route
          path="/redeem"
          element={<ProtectedRoute><RedeemPoints /></ProtectedRoute>}
        />
        <Route
          path="/reports"
          element={<ProtectedRoute><Reports /></ProtectedRoute>}
        />
        <Route
          path="/promotions"
          element={<ProtectedRoute><Promotions /></ProtectedRoute>}
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;

// File: src/containers/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin' && password === '1234') {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} /><br />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

// File: src/containers/Dashboard.js
import React from 'react';

export default function Dashboard() {
  return (
    <div style={{ padding: 20 }}>
      <h2>My Dashboard</h2>
      <p>Point Balance: 1200</p>
      <p>Points Redeemed: 300</p>
      <p>Points Expired (Month End): 100</p>
    </div>
  );
}

// File: src/containers/RedeemPoints.js
import React, { useState } from 'react';

export default function RedeemPoints() {
  const [points, setPoints] = useState(0);

  return (
    <div style={{ padding: 20 }}>
      <h2>Redeem My Points</h2>
      <p>100 Points = $1</p>
      <input type="number" placeholder="Enter points to redeem" onChange={(e) => setPoints(e.target.value)} />
      <p>Equivalent in $: ${(points / 100).toFixed(2)}</p>
    </div>
  );
}

// File: src/containers/Reports.js
import React, { useState } from 'react';

export default function Reports() {
  const [report, setReport] = useState('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  return (
    <div style={{ padding: 20 }}>
      <h2>Reports</h2>
      <select onChange={(e) => setReport(e.target.value)}>
        <option value="">Select Report</option>
        <option value="consented">Consented</option>
        <option value="roll_forward">Roll Forward</option>
        <option value="benefit">Benefit Statement</option>
        <option value="pbi">PBI</option>
      </select>
      {report && (
        <>
          <br />
          <input type="date" onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })} /> to
          <input type="date" onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })} />
        </>
      )}
    </div>
  );
}

// File: src/containers/Promotions.js
import React from 'react';

export default function Promotions() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Active Promotions</h2>
      <ul>
        <li>Summer Sale - 2x Points</li>
        <li>Buy 1 Get 1 on selected items</li>
        <li>Free shipping over $50</li>
      </ul>
    </div>
  );
}
