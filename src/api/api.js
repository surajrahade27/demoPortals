import axios from 'axios';
import { REACT_APP_API_URL } from './constants'

const apiPrefix = '/api/v1';

export const LMS_API_PATHS = {
  authenticate: `${apiPrefix}/authenticate`,
  learnm: `${apiPrefix}/learnm`,
};

const tokenPrefix = 'Bearer';
export const lms = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


lms.interceptors.request.use(
  (config) => {
    if (!config.headers.Authorization) {
      const token = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).auth).user;
      console.log("Token Inside interceptor:"+token);
      if (token) {
          config.headers.Authorization = `${tokenPrefix} ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axios.interceptors.request.use(
  (config) => {
    if (!config.headers.Authorization) {
      const token = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).auth).user;
      console.log("Token Inside interceptor:"+token);
      if (token) {
          config.headers.Authorization = `${tokenPrefix} ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error),
);
export default axios;