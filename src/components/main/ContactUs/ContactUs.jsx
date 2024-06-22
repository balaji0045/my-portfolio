import React, { useContext } from 'react'
import './ContactUs.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MaleImage from '../../../assets/male speaking Phone.webp'
import { ThemeContext } from '../../Context/themeContext';

const ContactUs = () => {
  const {theme} = useContext(ThemeContext);
  
  const textFieldStyles = {
    '& .MuiInputBase-root': {
      color: theme === 'dark' ? 'white' : 'black',
    },
    '& .MuiInputLabel-root': {
      color: theme === 'dark' ? 'white' : 'black',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme === 'dark' ? 'white' : 'black',
      },
      '&:hover fieldset': {
        borderColor: theme === 'dark' ? '#3399ff' : 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: theme === 'dark' ? '#3399ff' : 'black',
      },
    },
  };

  return (
    <div className='contactus' style={{ backgroundColor: theme === 'dark' ? '#212529' : 'white' }}>
      <div className="header">
        <h1 style={{ color: theme === 'dark' ? "#3399ff" : 'black' }}>Contact Us</h1>
      </div>
      <div className="form-container">
        <div className="form" style={{ backgroundColor: theme === 'dark' ? '#101316' : "", color: theme === 'dark' ? "white" : "" }}>
          <div className="sub-heading">
            <h3>Fill The Form</h3>
          </div>
          <div className="form-area">
            <Box
              sx={{
                width: 500,
                maxWidth: '100%'
              }}
              className='box'
            >
              <div className='names'>
                <TextField label="Enter First Name" className='firstname' sx={textFieldStyles}required />
                <TextField label="Enter Last Name" sx={textFieldStyles} />
              </div>
              <div>
                <TextField fullWidth label="Enter your Email" id="fullWidth" sx={textFieldStyles} required/>
              </div>
              <div>
                <TextField fullWidth label="Phone Number" id="fullWidth" sx={textFieldStyles} />
              </div>
              <div>
                <TextField
                  fullWidth
                  id="outlined-multiline-static"
                  label="Enter Your Comments"
                  multiline
                  rows={2}
                  sx={textFieldStyles}
                  required
                />
              </div>
              <div>
                <Button variant='outlined' sx={{ color: theme === 'dark' ? 'white' : 'black', borderColor: theme === 'dark' ? 'white' : 'black' }} type='submit'>Submit</Button>
              </div>
            </Box>
          </div>
        </div>

        <div className="images">
          <img src={MaleImage} alt="" className='image1' />
        </div>
      </div>
    </div>
  )
}

export default ContactUs
