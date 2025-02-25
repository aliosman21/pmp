import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Typography, Grid2 } from '@mui/material';
import { JsonForms } from '@jsonforms/react';
import { schema, UISchema } from '../form';
import { renderers } from '../../utils/Renderers';
import { materialCells } from '@jsonforms/material-renderers';
import { useQuery } from '@tanstack/react-query';
import { fetchPatientByID } from '../../utils/api';


const Patient = () => {
    const router = useRouter();
    const { id } = router.query;

    const { data, error, isLoading } = useQuery({
        queryKey: ['patient', id],
        queryFn: () => fetchPatientByID(id as string),
        enabled: !!id,
    });


    if (isLoading) {
        return <Typography>Loading...</Typography>;
    }

    if (error) {
        return <Typography>Error loading patient data</Typography>;
    }

    return (
        <Grid2 container justifyContent={'center'} sx={{ mt: 5 }}>
            <Grid2 size={10}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Patient profile
                </Typography>
            </Grid2>
            <Grid2 size={10}>
                <JsonForms
                    schema={schema}
                    uischema={UISchema}
                    data={data}
                    renderers={renderers}
                    cells={materialCells}
                    readonly
                />
            </Grid2>
        </Grid2>
    );
};

export default Patient;