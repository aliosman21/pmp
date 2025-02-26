// filepath: /pages/login.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = (e: any) => {
        e.preventDefault();
        // Simple authentication logic
        if (username === 'admin' && password === 'pass') {
            localStorage.setItem('auth', 'true');
            const redirectUrl = localStorage.getItem('redirectAfterLogin') || '/';
            localStorage.removeItem('redirectAfterLogin');
            router.push(redirectUrl);
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <Container maxWidth="sm">
            <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={handleLogin}>
                    <TextField
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    {error && <Typography color="error">{error}</Typography>}
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Login
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default Login;