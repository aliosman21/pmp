import { FC } from 'react';
import { PatientInfoModel } from '../models/patientModel';
import { TableContainer, Table, Paper, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

interface PatientInfoProps {
    patient: PatientInfoModel;
}

const PatientInfo: FC<PatientInfoProps> = ({ patient }) => {
    return (

        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Attribute</TableCell>
                        <TableCell>Value</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>{patient.name}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Weight</TableCell>
                        <TableCell>{patient.weight}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Height</TableCell>
                        <TableCell>{patient.height}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Notes</TableCell>
                        <TableCell>{patient.notes}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default PatientInfo;