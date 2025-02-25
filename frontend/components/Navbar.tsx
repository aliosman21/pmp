// filepath: /components/Navbar.tsx
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

const Navbar = () => {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('auth');
        router.push('/login');
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Patients Management System
                </Typography>
                <Button color="inherit" onClick={() => router.push('/patients')}>Patient List</Button>
                <Button color="inherit" onClick={() => router.push('/patients/add')}>New Patient</Button>
                <Button color="inherit" onClick={handleLogout}>Logout</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;