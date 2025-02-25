import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Typography, Grid2, Button } from '@mui/material';
import { JsonForms } from '@jsonforms/react';
import { schema, UISchema } from './form';
import { renderers } from '../../utils/Renderers';
import { materialCells } from '@jsonforms/material-renderers';
import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchPatientByID, updatePatient } from '../../utils/api';


const Patient = () => {
    const router = useRouter();
    const { id } = router.query;
    const [patientData, setPatientData] = useState({});


    const { data, error, isLoading, isSuccess } = useQuery({
        queryKey: ['patient', id],
        queryFn: () => fetchPatientByID(id as string),
        enabled: !!id,
    });

    useEffect(() => {
        if (isSuccess && data) {
            setPatientData(data);
        }
    }, [isSuccess, data]);

    const mutation = useMutation({
        mutationFn: (variables: { id: string, patientData: any }) => updatePatient(variables.id, variables.patientData),
        onSuccess: () => {
            alert('Patient updated successfully');
        },
    });

    const handleUpdate = (e: any) => {
        e.preventDefault();
        mutation.mutate({ id: id as string, patientData });
    };


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
            <Grid2 size={10} display={'flex'} justifyContent={'flex-end'} sx={{ mb: 5 }}>

                <Button variant="contained" color="primary" onClick={handleUpdate}>
                    Update
                </Button>
            </Grid2>
            <Grid2 size={10}>
                <JsonForms
                    schema={schema}
                    uischema={UISchema}
                    data={patientData}
                    renderers={renderers}
                    cells={materialCells}
                    onChange={({ data }) => {
                        setPatientData(data);
                    }}
                />
            </Grid2>
        </Grid2>
    );
};

export default Patient;