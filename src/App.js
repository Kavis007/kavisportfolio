import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, createBrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Firstmain from './Portfolio/Firstmain';
import Navcomponent from './Portfolio/Navcomponent';
import Aboutpage from './Aboutpage';
import Skills from './Skills';
import Contact from './Contact';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navcomponent />
        <Routes>
          <Route path='/' element={<Firstmain />} />
          <Route path='/Home' element={<Firstmain />} />
          <Route path='/About' element={<Aboutpage />} />
          <Route path='/Skills' element={<Skills />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
