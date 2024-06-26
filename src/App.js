import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { useState } from 'react';
import Main from './components/main/Main';
import Footer from './components/Footer/Footer';
import Blogs from './pages/Blogs';
function App() {
  
  
  return (
    <div className="App">
      <Router>
        {/* <Main className='main'/> */}
      <Routes >
      <Route path='/'  element={<Main />} />
        <Route path='/blogs' element={<Blogs/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
