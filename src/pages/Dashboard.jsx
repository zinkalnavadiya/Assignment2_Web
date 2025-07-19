import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth);
    navigate('/');
  };

  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      <p>User: {auth.currentUser?.email}</p>
      <button onClick={handleLogout}>Logout</button>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => navigate('/weather')}>Weather</button>
        <button onClick={() => navigate('/news')}>News</button>
        <button onClick={() => navigate('/finance')}>Finance</button>
      </div>
    </div>
  );
};

export default Dashboard;