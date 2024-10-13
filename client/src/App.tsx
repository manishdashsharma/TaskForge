import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import ServerHealthStatus from './Pages/ServerHealthStatus/ServerHealthStatus';
import Welcome from './Pages/Welcome';
import SignUp from './Pages/Auth/SignUp/SignUp';
import SignIn from './Pages/Auth/SignIn/SignIn';
import ProfilePage from './Pages/ProfilePage/ProfilePage';


const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/health" element={<ServerHealthStatus />} />
      <Route path="/" element={<Welcome />} />
      {/* App Authentication Parent Route */}
      <Route path="/app" element={<Outlet />}>
        <Route path="sign-up" element={<SignUp />} />
        <Route path = "sign-in" element={<SignIn/>} />
      </Route>
      {/* Account */}
      <Route path='account' element={<Outlet/>}>
      <Route path='account/profile' element={<ProfilePage/>}/>
      </Route> 
    </Routes>
  );
};

export default App;
