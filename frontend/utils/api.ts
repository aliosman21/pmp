import axios from 'axios';

const API_BASE_URL = 'https://your-api-url.com/api'; // Replace with your actual API base URL

export const fetchPatientByUUID = async (uuid: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/patients/${uuid}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching patient data:', error);
        throw error;
    }
};

// Additional API utility functions can be added here as needed.