import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import React, { useContext } from 'react'
import './Footer.css'
import { ThemeContext } from '../Context/themeContext';
const Footer = () => {
  const date= new Date();
  const year=date.getFullYear()
  const {theme}=useContext(ThemeContext)
  return (
    <div className={`footer ${theme==='dark'? 'darkmode':''}`} style={{backgroundColor:theme==='dark'?"#212529":'white',
      color:theme==='dark'?'#3399ff':"black"
    }}>
         <div className="foooter-container">
                 <div className="topitems">
                     <div className="header">
                      <h3>Portfolio</h3> 
                      </div>
                      <div className="icons" >
                        <Instagram style={{fontSize:'40px'}} className={`icon ${theme==='dark'? 'darkmode':''}`}/>
                        <Facebook style={{fontSize:'40px'}}  className={`icon ${theme==='dark'? 'darkmode':''}`} />
                        <Twitter style={{fontSize:'40px'}}  className={`icon ${theme==='dark'? 'darkmode':''}`}/>
                      </div>
                 </div>
                 <div className="copyright">
                  <p> {'\u00A9'} {year} Balaji. All rights reserved.</p>
                 </div>
         </div>

    </div>
  )
}

export default Footer