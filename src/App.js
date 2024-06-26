import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { useEffect, useState } from 'react';
import Main from './components/main/Main';
import Footer from './components/Footer/Footer';
import Blogs from './pages/Blogs';
import { ScaleLoader } from 'react-spinners';
function App() {
    const [loading,setLoading]=useState(true);

  useEffect(()=>{
   setTimeout(() => {
    setLoading(false)
   }, 3000);
  },[])
  
  return (
    <div className="App">
    {loading ?(
      <div className="loader" style={{
        minHeight:'100vh',
        display:'flex',
        alignItems:'center',
        backgroundColor:'black',
        justifyContent:'center'
      }}>

      <ScaleLoader color='white'
        height={'100px'}
        width={'8px'}
      />
      </div>
      
      ):(
      <Router>
        {/* <Main className='main'/> */}
      <Routes >
      <Route path='/'  element={<Main />} />
        <Route path='/blogs' element={<Blogs/>} />
      </Routes>
      </Router>
  )}
    </div>
  );
}

export default App;
