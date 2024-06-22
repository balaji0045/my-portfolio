import {BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { useState } from 'react';
import Main from './components/main/Main';
import Footer from './components/Footer/Footer';
function App() {
  
  return (
    <div className="App">
      <Router>
        <NavBar   />
        <Main className='main'/>
        <Footer/>
      {/* <Routes path='/'  element={<Main />}></Routes> */}
      </Router>
    </div>
  );
}

export default App;
