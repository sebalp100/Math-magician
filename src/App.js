import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/NavBar';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

const App = () => (
  <BrowserRouter>
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </>
  </BrowserRouter>
);

export default App;
