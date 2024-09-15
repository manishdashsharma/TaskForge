import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ServerHealthStatus from './Pages/ServerHealthStatus/ServerHealthStatus';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ServerHealthStatus />} />
    </Routes>
  );
};

export default App;
