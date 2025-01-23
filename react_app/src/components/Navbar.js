import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AppBar, Toolbar, Button, Typography, Box, Avatar } from '@mui/material';

const Navbar = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    // Function to handle logout
    const handleLogout = async () => {
        try {
            await axios.post('/api/v1/auth/logout');
            console.log('User logged out');
            setLoggedIn(false); // Update login status
            navigate('/'); // Redirect to home
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    // Function to check login status
    const checkLoginStatus = async () => {
        try {
            const response = await axios.post('/api/v1/auth/loggedinCheck');
            if (response.data.success) {
                setLoggedIn(true);
                setUserName(response.data.user.username); // Assuming the response contains user name
            } else {
                setLoggedIn(false);
            }
        } catch (error) {
            console.error('Error checking login status:', error);
            setLoggedIn(false); // Default to not logged in on error
        }
    };

    // Check login status once when the component mounts
    useEffect(() => {
        checkLoginStatus();
    }); // Empty dependency array ensures it runs only once

    return (
        <AppBar position="fixed" sx={{ height: '2cm', top: 0, left: 0, right: 0 }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                </Typography>
                {isLoggedIn ? (
                    <>
                        <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
                        <Button color="inherit" onClick={handleLogout}>Logout</Button>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', ml: 2 }}>
                          <Avatar sx={{ width: 24, height: 24 }} />
                          <Typography variant="body1" sx={{ mt: 1 }}>{userName}</Typography>
                        </Box>

                    </>
                ) : (
                    <>
                        <Button color="inherit" component={Link} to="/register">Register</Button>
                        <Button color="inherit" component={Link} to="/login">Login</Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
