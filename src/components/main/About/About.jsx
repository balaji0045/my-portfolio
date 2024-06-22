import React from "react";
import "./About.css";
import { Button } from "@mui/material";
import { Download } from "@mui/icons-material";
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/system';
import { useContext } from "react";
import { ThemeContext } from "../../Context/themeContext";
const CustomTooltip = styled(Tooltip)(({ theme }) => ({
  backgroundColor: '#ffcc00',
  color: 'black',
  fontSize: '1rem',
}));

const About = () => {
// const classes=useStyles();
const {theme}=useContext(ThemeContext);

  return (
    <div className="about"
    style={{
      backgroundColor:theme==='dark'?'#212529':""
    }}>

        <div className="abtheading"
        style={{
          color:theme==='dark'?'#3399ff':''
          }}>
      

          <h1>About Me</h1>
          
        </div>

 <div className="abtdetailscontainer">

<div className="aboutOnly" style={{
  backgroundColor: theme ==='dark'?"#0e0c0c":'',
  color:theme==='dark'?"white":''
 }}
>
       <div className="abtdetailsHeading">

      <h2 id="detailHeading">So Who I Am!</h2>

       <div className="detailContent">
       <h3> 
         Hello! My name is Balaji, and I'm a passionate full stack developer .<br></br>
         <p id="para">
         I have been working on web designing and web development for 2 years. Constantly updating the technologies I already master, but also looking to learn new technologies to enrich my skills and improve my good practices as a developer.
         </p>

            </h3>


   <div className="personaldetils">
              <h3 className="detailsubhead">
                Age :<span id="dsvalue">20</span>
              </h3>

              <h3 className="detailsubhead">
                Hobbies :<span id="dsvalue" className="hobbie">programming,Football</span>
              </h3>

              <h3 className="detailsubhead" >
                Email :
                <span id="dsvalue" className="email">
                  <a href="">Balajidk100@gmail.com</a>
                </span>
              </h3>
              <h3 className="detailsubhead">
                Location :<span id="dsvalue" className="locatation">Chennai,India</span>
              </h3>
            </div>
            <div className="downloadButtons">
              <Button  variant="outlined" className="download" startIcon={<Download />}>DownLoad Cv</Button>
              
              <Button className="readmore" variant="contained" startIcon={<ReadMoreIcon />}>Read More..</Button>
            </div>

          </div>

         </div>

    </div>

  <div className="skillsContainer"
   style={{
  backgroundColor: theme ==='dark'?"#0e0c0c":'',
  color:theme==='dark'?"white":''
 }}
  >
        
         <div className="skillheader">
              <h2>Skills</h2>
         </div>
             <div id="frontendhead">
             <h3>Front-End:</h3>
             </div>
         <div className="front-end-icons" style={{
          color:theme === 'dark'?'white':''
         }}>

          <div className="front-end-icon">
          <Tooltip title='HTML' placement="top"  >
          <img alt="HTML" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
          </Tooltip>
          </div>

          <div className="front-end-icon">

          <img alt="HTML" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
          </div>

          <div className="front-end-icon">
          <img alt="HTML" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" />
          </div>

          <div className="front-end-icon">
          <img alt="Sass" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
          </div>

          <div className="front-end-icon">
          <img alt="Bootstrap" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
          </div>

          <div className="front-end-icon">
          <img alt="jQuery" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" />
          </div>

          <div className="front-end-icon">
          <img alt="HTML" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" />
          </div>
   </div>

   <div className="backendicons">
     <div className="head"><h3>Backend :</h3></div>
     <div className="backend-icons">
          <div className="backicons">
          <img alt="Nodejs" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />

          </div>
          
          <div className="backicons">
          <img alt="express" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />

          </div>
          <div className="backicons">
          <img alt="Nodejs" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />

          </div>
          <div className="backicons">
          <img alt="Nodejs" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />

          </div>
          <div className="backicons">
          <img alt="Nodejs" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" />

          </div>
          <div className="backicons">
          <img alt="Nodejs" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
          </div>

     </div>

       <div className="tools">
        <div className="toolshead">
          <h3>Tools :</h3></div>
             <div className="toolsicons">
              <div className="tools">
              <img alt="Visual Studio Code" className="icons-skils" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png"  />
              </div>

              <div className="tools">
              <img alt="git" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"  />
              </div>
              <div className="tools">
              <img alt="git" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"  />
              </div>
              <div className="tools">
              <img alt="photoshop" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"  />
              </div>



             </div>

       </div>


   </div>


    </div>

      </div>


    </div>
  );
};

export default About;
