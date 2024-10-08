import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import ServerHealthStatus from './Pages/ServerHealthStatus/ServerHealthStatus';
import Welcome from './Pages/Welcome';
import SignUp from './Pages/Auth/SignUp/SignUp';


const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/health" element={<ServerHealthStatus />} />
      <Route path="/" element={<Welcome />} />
      {/* App Authentication Parent Route */}
      <Route path="/app" element={<Outlet />}>
        <Route path="sign-up" element={<SignUp />} />
      </Route>
    </Routes>
  );
};

export default App;
