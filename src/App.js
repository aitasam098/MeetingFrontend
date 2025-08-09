import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import EmailVerification from './components/EmailVerification';
import ForgotPassword from './components/ForgotPassword';
import BookMeeting from './components/BookMeeting'; // ✅ Import your new screen
import OwnerDashboard from './components/OwnerDashboard';
import Requests from './components/Requests';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path ="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={< SignupPage/>} />
        <Route path="/verify-email" element={<EmailVerification />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> 
        <Route path="/bookmeeting" element={<BookMeeting />} /> 
        <Route path ="/ownerdashboard" element={<OwnerDashboard/>}/>
        <Route path ="/requests" element = {<Requests/>}/>
      </Routes>
    </Router>
  );
}

export default App;
