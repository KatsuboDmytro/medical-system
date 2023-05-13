import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform login logic or API call here
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <Container 
        maxWidth="sm"
        style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100vh',
          }}>
            <Typography variant="h4" align="center" gutterBottom>
                Login
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                label="Username"
                value={username}
                onChange={handleUsernameChange}
                fullWidth
                margin="normal"
                />
                <TextField
                label="Password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                fullWidth
                margin="normal"
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                Sign In
                </Button>
            </form>
        </Container>
    );
};
