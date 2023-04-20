import { lms } from './api';
import { AxiosInstance } from 'axios';

const axiosInstance = AxiosInstance;
function setResponseInterceptor(axiosInstance) {
    axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        // Exception for user registration endpoint
        if (
          error.response.status === 401 &&
          error.response?.config?.url !== '/api/v1/updateUserInfo'
        ) {
          storage.removeItem('persist:root');
          store.dispatch(logout());
        }
        return Promise.reject(error);
      },
    );
  }

setResponseInterceptor(lms);
