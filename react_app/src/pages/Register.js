import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const Register = () => {
  const navigate = useNavigate();
  
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      console.log('Form submitted:');
      await axios.post('/api/v1/auth/register', { username, email, password }); // send data to server
      console.log('send for registering');

      navigate('/login');
    
    setTimeout(() => {
      navigate('/login');
    }, 2000);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
        backgroundColor: '#f0f0f0', // Light grey background color
        borderRadius: '8px', // Rounded corners
        padding: '16px', // Padding inside the box
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Box shadow for a subtle effect
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center the children horizontally
        width: '50%', // Increase the width of the box
        minWidth: '300px', // Ensure the box is always wider than the input fields
        margin: 'auto', // Center the box horizontally
        marginTop: '50px', // Add some margin to the top
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Register Here
      </Typography>
      <div style={{ width: '100%' }}>
        <TextField
          label="Name"
          variant="outlined"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          required
          fullWidth
        />
      </div>
      <div style={{ width: '100%' }}>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
        />
      </div>
      <div style={{ width: '100%' }}>
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          fullWidth
        />
      </div>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};