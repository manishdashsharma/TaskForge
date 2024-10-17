import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';  // Import Toaster
import ServerHealthStatus from './Pages/ServerHealthStatus/ServerHealthStatus';
import Welcome from './Pages/Welcome';
import SignUp from './Pages/auth/SignUp/SignUp';
import SignIn from './Pages/auth/SignIn/SignIn';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import ForgotPassword from './Pages/auth/ForgotPassword/ForgotPassword';

const App: React.FC = () => {
  return (
    <>
      <Toaster reverseOrder={false} />
      
      <Routes>
        <Route path="/health" element={<ServerHealthStatus />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/app" element={<Outlet />}>
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>
        <Route path="account" element={<Outlet />}>
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
