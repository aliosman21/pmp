// filepath: /F:/QR/frontend/components/FileUploadRenderer.tsx
import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { Button, Grid2, Typography } from '@mui/material';

const FileUploadRenderer = ({ data, handleChange, path, label }: any) => {
    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                handleChange(path, e.target?.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Grid2 container direction="column" justifyItems={'center'} alignItems={'center'}>
            <Button variant="contained" component="label" sx={{ width: '25%' }}>
                Upload File
                <input type="file" hidden onChange={onFileChange} />
            </Button>
            {data && (
                <Typography variant="body2" sx={{ mt: 2 }}>
                    File uploaded
                </Typography>
            )}
        </Grid2>
    );
};

export default withJsonFormsControlProps(FileUploadRenderer);