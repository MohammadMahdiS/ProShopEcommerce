import axios from 'axios';
import config from './config';

const axiosInstance = axios.create({
    baseURL: config.apiUrl,  // Base URL for all requests
    // You can add default headers or interceptors here if needed
  });
  
  // Export a function to get axios instance based on different configurations if needed
  export const getAxiosInstance = (configType = 'default') => {
    switch (configType) {
      case 'admin':
        return axios.create({
          baseURL: config.apiAdmin,
          // Add admin-specific configurations here if necessary
        });
      default:
        return axiosInstance;
    }
  };
  
  export default axiosInstance;