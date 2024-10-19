import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';  // Import Toaster
import ServerHealthStatus from './Pages/ServerHealthStatus/ServerHealthStatus';
import Welcome from './Pages/Welcome';
import SignUp from './Pages/auth/SignUp/SignUp';
import SignIn from './Pages/auth/SignIn/SignIn';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import ForgotPassword from './Pages/auth/ForgotPassword/ForgotPassword';
import ResetPassword from './Pages/auth/ResetPassword/ResetPassword';
import EmailLinkRoute from './Pages/auth/EmailLinkRoute/EmailLinkRoute';
import Error from './Pages/Error/Error';


const App: React.FC = () => {
  return (
    <>
      <Toaster reverseOrder={false} />

      <Routes>
        <Route path="/health" element={<ServerHealthStatus />} />
        <Route path="/" element={<Welcome />} />
        <Route path="error" element={<Error/>} />
        <Route path="/app/confirmation/:token" element={<EmailLinkRoute/>} />
        <Route path="/app" element={<Outlet />}>
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password/:token" element={<ResetPassword />} />
        </Route>
        <Route path="account" element={<Outlet />}>
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
