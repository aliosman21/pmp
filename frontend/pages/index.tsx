// filepath: /pages/form.tsx
import { useState } from 'react';
import { Container, TextField, Button, Typography, Grid2 } from '@mui/material';
import { JsonForms } from '@jsonforms/react';
import { schema, UISchema } from './form'
import {
    materialRenderers,
    materialCells,
} from '@jsonforms/material-renderers';
import { renderers } from '../utils/Renderers';

const Home = () => {
    const [data, setData] = useState({});

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <Grid2 container justifyContent={'center'} sx={{ mt: 5 }}>
            <Grid2 size={10}>
                <Typography variant="h4" component="h1" gutterBottom>
                    New Patient Form
                </Typography>
            </Grid2>
            <Grid2 size={10}>
                <JsonForms
                    schema={schema}
                    uischema={UISchema}
                    data={data}
                    renderers={renderers}
                    cells={materialCells}
                    onChange={({ data }) => {
                        console.log(data);
                        setData(data);
                    }}

                />
            </Grid2>
        </Grid2>
    );
};

export default Home;