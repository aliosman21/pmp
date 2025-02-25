import React, { useState } from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { Box, Button, Grid2, Typography } from '@mui/material';
import { uploadFile } from './api';

const FileUploadRenderer = ({ data, handleChange, path, label }: any) => {
    const [fileName, setFileName] = useState<string | null>(null);
    const [filePreview, setFilePreview] = useState<string | null>(null);

    const onFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            setFileName(file.name);
            const formData = new FormData();
            formData.append('file', file);

            try {
                const url = await uploadFile(formData);
                setFilePreview(url);
                handleChange(path, url);
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        }
    };

    console.log('data', data)

    return (
        <Grid2 container>
            <Box >

                <Button variant="contained" component="label" fullWidth>
                    Upload File
                    <input type="file" hidden onChange={onFileChange} />
                </Button>
            </Box>
            <Grid2 size={1}></Grid2>
            <Grid2 size={9}>

                {(filePreview || data) && (
                    <a href={filePreview || data} target="_blank" rel="noopener noreferrer">
                        <img src={filePreview || data} alt="File preview" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                    </a>
                )}
            </Grid2>
        </Grid2>
    );
};

export default withJsonFormsControlProps(FileUploadRenderer);