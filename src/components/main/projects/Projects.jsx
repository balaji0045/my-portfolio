import React from 'react';
import './Project.css';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import hospital from '../../../assets/hospital-Project-screenShot.jpg';
import portfolio from '../../../assets/portfolio-screenshot.jpg';
import gym from '../../../assets/gym website-screenshot.jpg';
import { useContext } from 'react';
import { ThemeContext } from '../../Context/themeContext';
import {motion} from 'framer-motion';
import { fadeIn } from "../../../variants";


const Projects = () => {
  const {theme}=useContext(ThemeContext);
  return (
    <div className='projects'
      style={{
        backgroundColor:theme ==="dark"?"#212529":"white"
      }}
    >
      <div className="header">
        <h1 style={{
          color:theme=== 'dark'?"#3399ff":'black'
            }}>Projects</h1>
      </div>

      <div className="projects-container"
       
      >
        <Card className="card"  style={{
        backgroundColor:theme ==="dark"?"black":"white",
        
      }}>
          <CardMedia
            component="img"
            alt="Hospital Management System"
            height="140"
            image={hospital}
            className="card-media"
          />
          <CardContent className="card-content" >
            <Typography className='card-heading' gutterBottom variant="h5" component={"div"}
          style={{ color:theme ==='dark'?'white':'black'}}
          >

            
              Hospital Management System
            </Typography>
            <Typography className='sub-heading' color={"text.secondary"} 
              style={{ color:theme ==='dark'?'white':'black'}}
                      >
              Spring Boot project for Hospital Management
            </Typography>
          </CardContent>
          <CardActions className="card-actions">
            <Button size='small' variant='outlined' component='a' href="https://gym-website-blond.vercel.app/">Code</Button>
            <Button size='small' variant='outlined'>Live Demo</Button>
          </CardActions>
        </Card>

        <Card className="card" style={{
        backgroundColor:theme ==="dark"?"black":"white",
        
      }}>
          <CardMedia
            component="img"
            alt="Portfolio In React Js"
            height="140"
            image={portfolio}
            className="card-media"
          />
          <CardContent className="card-content">
            <Typography className='card-heading' gutterBottom variant="h5" component={"div"}
              style={{ color:theme ==='dark'?'white':'black'}}
                          >
              Portfolio In React Js
            </Typography>
            <Typography className='sub-heading' variant='body2' color={"text.secondary"}
            style={{ color:theme ==='dark'?'white':'black'}}
                          >
              This is my Personal Portfolio Project created in React Js
            </Typography>
          </CardContent>
          <CardActions className="card-actions">
            <Button size='small' variant='outlined'>Code</Button>
            <Button size='small' variant='outlined'>Live Demo</Button>
          </CardActions>
        </Card>

        <Card className="card"  style={{
        backgroundColor:theme ==="dark"?"black":"white",
        
      }}>
          <CardMedia
            component="img"
            alt="Gym Website"
            height="140"
            image={gym}
            className="card-media"
          />
          <CardContent className="card-content">
            <Typography className='card-heading' gutterBottom variant="h5" component={"div"}
             style={{ color:theme ==='dark'?'white':'black'}}
                >
              Gym Website
            </Typography>
            <Typography className='sub-heading' variant='body2' color={"text.secondary"}
              style={{ color:theme ==='dark'?'white':'black'}}>
              This is a Gym Website
            </Typography>
          </CardContent>
          <CardActions className="card-actions">
            <Button size='small' variant='outlined'>Code</Button>
            <Button size='small' variant='outlined' href="https://gym-website-blond.vercel.app/" 
  target="_blank" 
  rel="noopener noreferrer">Live Demo</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
