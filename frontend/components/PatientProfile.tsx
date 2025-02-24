import { FC } from 'react';
import { PatientInfoModel } from '../models/patientModel';
import { Typography, Box, Avatar, Card, CardContent } from '@mui/material';
// import QRCode from 'qrcode.react';

interface PatientProfileProps {
    patient: PatientInfoModel;
}

const PatientProfile: FC<PatientProfileProps> = ({ patient }) => {
    return (
        <Card>
            <CardContent>
                <Box display="flex" flexDirection="column" alignItems="center" p={2}>
                    <Avatar alt={patient.name} src="/path/to/patient/photo.jpg" sx={{ width: 100, height: 100, mb: 2 }} />
                    <Typography variant="h6">{patient.name}</Typography>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                        alt="QR Code"
                        style={{ marginTop: 16, width: 128, height: 128 }}
                    />
                    {/* <QRCode value={patient.name} size={128} style={{ marginTop: 16 }} /> */}
                </Box>
            </CardContent>
        </Card>
    );
};

export default PatientProfile;