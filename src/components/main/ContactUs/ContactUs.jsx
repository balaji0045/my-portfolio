import React, { useContext, useState } from 'react';
import './ContactUs.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MaleImage from '../../../assets/male speaking Phone.webp';
import { ThemeContext } from '../../Context/themeContext';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const { theme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    comments: '',
  });

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_2nfarv9', 'template_35vfm94', formData, 'SieDyVrcev-0nUH13')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    // Reset form data
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      comments: '',
    });
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
              component="form"
              onSubmit={handleSubmit}
            >
              <div className='names'>
                <TextField
                  label="Enter First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className='firstname'
                  sx={textFieldStyles}
                  required
                />
                <TextField
                  label="Enter Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  sx={textFieldStyles}
                />
              </div>
              <div>
                <TextField
                  fullWidth
                  label="Enter your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  sx={textFieldStyles}
                  required
                />
              </div>
              <div>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  sx={textFieldStyles}
                />
              </div>
              <div>
                <TextField
                  fullWidth
                  label="Enter Your Comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  multiline
                  rows={2}
                  sx={textFieldStyles}
                  required
                />
              </div>
              <div>
                <Button
                  variant='outlined'
                  sx={{ color: theme === 'dark' ? 'white' : 'black', borderColor: theme === 'dark' ? 'white' : 'black' }}
                  type='submit'
                >
                  Submit
                </Button>
              </div>
            </Box>
          </div>
        </div>

        <div className="images">
          <img src={MaleImage} alt="" className='image1' />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
