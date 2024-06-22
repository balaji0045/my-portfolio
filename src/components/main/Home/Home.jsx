// Home.jsx
import React from "react";
import "./Home.css";
import { ReactTyped } from "react-typed";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaAnglesDown } from "react-icons/fa6";
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { ThemeContext } from '../../Context/themeContext';
import { useContext } from "react";

const Home = () => {
  const {theme}=useContext(ThemeContext);
  return (
    <div className={"home"} style={
      {
        backgroundColor:theme ==="dark"?"#212529":"white",
        color:theme ==="dark"?"white":"black"
      }
    }>
      <div className={"home-content"} >
        <div className="heading-content"> 
          <h2 id="hello"  style={{
            color:theme ==="dark"?'white':"black"
          }}>Hello !</h2>
          <div id="intro" style={{
            color:theme==="dark"?"white":''
          }}>
            <h1>I am <span id="name">Balaji</span></h1>
          </div>
          <div id="job" style={{
            color:theme==="dark"?"white":''
          }}>
            <ReactTyped
              strings={["I Am Full-Stack Developer", "I Am SoftWare Developer"]}
              typeSpeed={150}
              backSpeed={100}
               loop
            />
          </div>
        </div>
        <div className="social-icons" style={
          {
            color:theme==="dark"?"white":""
          }
        }>
        
            <a href="https://github.com/balaji0045"  id="github" className="social-icon  github" data-name="GitHub"  style={{
            color:theme==="dark"?"white":""
          }}>
            <FaGithub />
            </a>
            <a href="https://x.com/balajid0?t=ro0G-Gt8yTI4Rp382_w_ww&s=08"  id="twitter"  className="social-icon twitter" data-name="Twitter" style={{
            color:theme==="dark"?"white":""
          }}>
            <FaTwitter />

            </a>
            <a href="https://www.instagram.com/panther_kidd?igsh=YzJqbjQzeXZiaDNh" className="social-icon instagram"  id="instagram"  data-name="instagram" style={{
            color:theme==="dark"?"white":""
          }}>
            <FaInstagram />

            </a>
            <a href="https://www.linkedin.com/in/balaji-d-443b36254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-icon linkedin" id="linkedin"  data-name="LinkedIn" style={{
            color:theme==="dark"?"white":""
          }}>
            <FaLinkedin />
            </a>
          </div>
          <div className="scrolldownbutton">
               <div className="scrollbtn">
                    <h3 style={{
            color:theme==="dark"?"white":""
          }}>scroll down <FaAnglesDown /></h3>
               </div>
               
          </div>
      </div>
    </div>
  );
};

export default Home;
