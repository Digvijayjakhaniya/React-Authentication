import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './Components/pages/Layout';
import Home from './Components/pages/Home';
import Contact from './Components/pages/Contact';
import LoginReg from './Components/pages/auth/LoginReg';
import ResetPassword from './Components/pages/auth/ResetPassword';
import ChangePassword from './Components/pages/auth/ChangePassword';
import DashBoard from './Components/pages/DashBoard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='log-regi' element={<LoginReg />}></Route>
            <Route path='reset-pass' element={<ResetPassword />}></Route>
            <Route path='change-pass' element={<ChangePassword />}></Route>
          </Route>
          <Route path='/dashboard' element={<DashBoard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
