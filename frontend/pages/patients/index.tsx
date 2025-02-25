import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useQuery } from '@tanstack/react-query';

import { listPatients } from '../../utils/api';
import { Grid2 } from '@mui/material';
import { useRouter } from 'next/router';


const PatientList = () => {
    const router = useRouter();

    const { data, error, isLoading, isSuccess } = useQuery({
        queryKey: ['patient'],
        queryFn: () => listPatients(),
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading patients</div>;

    const columns = [
        { field: 'fullName', headerName: 'Name', flex: 1 },
        { field: 'gender', headerName: 'Gender', flex: 1 },
    ];

    const handleRowClick = (params: any) => {
        router.push(`/patients/${params.id}`);
    };

    return (
        <Grid2 container justifyContent={'center'} sx={{ mt: 5 }}>
            <Grid2 size={10}>
                <DataGrid rows={data} columns={columns} onRowClick={handleRowClick} />
            </Grid2>
        </Grid2>
    );
};

export default PatientList;