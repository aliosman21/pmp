import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export const listPatients = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/patients`);
        return response.data.data;
    } catch (error) {
        console.error('Error listing patients:', error);
        throw error;
    }
};

export const fetchPatientByID = async (id: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/patients/${id}`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching patient by ID:', error);
        throw error;
    }
};

export const createPatient = async (patientData: object) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/patients`, patientData);
        return response.data;
    } catch (error) {
        console.error('Error creating new patient:', error);
        throw error;
    }
};
export const updatePatient = async (id: string, patientData: object) => {
    try {
        const response = await axios.patch(`${API_BASE_URL}/patients/${id}`, patientData);
        return response.data;
    } catch (error) {
        console.error('Error creating new patient:', error);
        throw error;
    }
};

export const uploadFile = async (formData: FormData) => {
    try {
        const response = await axios.post('http://localhost:3000/patients/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data.filePath;

    } catch (error) {
        console.error('Error creating new patient:', error);
        throw error;
    }
}
