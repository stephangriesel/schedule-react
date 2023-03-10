import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import BookUser from './components/BookUser';
import Dashboard from './components/Dashboard';
import Login from './pages/Login';
import Profile from './components/Profile';
import Register from './pages/Register';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/book/:user' element={<BookUser />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default App;
