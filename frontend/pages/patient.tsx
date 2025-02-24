// filepath: /pages/patient.tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PatientProfile from '../components/PatientProfile';
import { fetchPatientByUUID } from '../utils/api';
import { Container, Typography, Drawer, Grid2, List, ListItemButton, ListItemText, ListItem, ListItemIcon } from '@mui/material';
import { PatientInfoModel } from '../models/patientModel';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PatientInfo from '../components/PatinetInfo';

const Patient = () => {
    const router = useRouter();
    const { uuid } = router.query;
    const [patient, setPatient] = useState<PatientInfoModel | null>({ name: 'test', weight: 0, height: 0, notes: '' });
    const [selectedComponent, setSelectedComponent] = useState('Profile');

    const handleComponentChange = (component: string) => {
        setSelectedComponent(component);
    };

    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState('');

    // useEffect(() => {
    //     if (uuid) {
    //         const getPatientData = async () => {
    //             try {
    //                 const data = await fetchPatientByUUID(uuid as string);
    //                 setPatient(data);
    //             } catch (err) {
    //                 setError('Failed to fetch patient information');
    //             } finally {
    //                 setLoading(false);
    //             }
    //         };
    //         getPatientData();
    //     }
    // }, [uuid]);

    // if (loading) return <CircularProgress />;
    // if (error) return <Typography color="error">{error}</Typography>;

    return (
        <Grid2 container>
            <Grid2 size={2}>
                <Drawer
                    variant="permanent"
                    anchor="left"
                    sx={{
                        width: 80,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: 200,
                            boxSizing: 'border-box',
                            marginTop: '64px',
                        },
                    }}
                >

                    <List>
                        {['Profile', 'Info', 'Notes', 'Drafts'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton onClick={() => handleComponentChange(text)}>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <HomeIcon /> : <InfoIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </Grid2>
            <Grid2 size={10}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Patient Information
                </Typography>
                {patient ? (
                    <Grid2 container spacing={2}>
                        <Grid2 size={3}>
                            <PatientProfile patient={patient} />
                        </Grid2>
                        <Grid2 size={6}>
                            {selectedComponent === 'Profile' && <PatientInfo patient={patient} />}
                            {selectedComponent === 'Info' && (
                                <Typography variant="body1">Additional Info Component</Typography>
                            )}
                            {selectedComponent === 'Notes' && (
                                <Typography variant="body1">Notes Component</Typography>
                            )}
                        </Grid2>
                    </Grid2>
                ) : (
                    <Typography>No patient found</Typography>
                )}
            </Grid2>
        </Grid2>
    );
};

export default Patient;