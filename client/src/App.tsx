import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ServerHealthStatus from './Pages/ServerHealthStatus/ServerHealthStatus';
import Welcome from './Pages/Welcome';
import Signup from './Pages/auth/Signup';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/health" element={<ServerHealthStatus />} />
      <Route path="/" element={<Welcome/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
  );
};

export default App;
