import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Signup from './components/Register';
import Loginform from './components/Login';
import Counselling from './components/Counselling';
import Profile from './components/Profile';
import Profiles from './components/Profiles';

import BackToTopButton from './components/BackToTopButton';
import Logout from './components/Logout';
import Blogs from './components/Blogs';
import Quiz from './components/Quiz';
import Homel  from './components/Homel';

const App = () => {
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here and set userAuthenticated to true
    setUserAuthenticated(true);
  };

  const handleLogout = () => {
    // Implement your logout logic here and set userAuthenticated to false
    setUserAuthenticated(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home userAuthenticated={userAuthenticated} onLogout={handleLogout} />}
        />
        <Route path="/Home" element={<Home userAuthenticated={userAuthenticated} onLogout={handleLogout} />} />
        <Route path="/login" element={<Loginform onLogin={handleLogin} />} />
        <Route path="/Register" element={<Signup />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Counselling" element={<Counselling />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profiles" element={<Profiles />} />

        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/BackToTopButton" element={<BackToTopButton />} />
        <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Homel" element={<Homel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
