import axios from 'axios';
import { BASE_URL } from './endpoints';

// Create an axios instance with the base URL
const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // Timeout after 10 seconds
});

// Response interceptor to handle global error handling
apiClient.interceptors.response.use(
  (response) => {
    // Handle successful response
    return response.data;
  },
  (error) => {
    // Handle error response globally
    let errorMessage;
    if (error.response) {
      errorMessage = error.response.data.message || 'An error occurred';
      console.log('Server Error:', error.response.data.message);
    } else if (error.request) {
      errorMessage = error?.message || 'Network Error: No response received';
      console.log('Network Error:', error.message);
    } else {
      errorMessage = error.message;
      console.log('Error:', error.message);
    }
    return Promise.reject(errorMessage);
  }
);

export default apiClient;