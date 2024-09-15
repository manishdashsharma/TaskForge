import axios, { AxiosInstance } from 'axios';

const servicesAxiosInstance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:5000'
});

export {
  servicesAxiosInstance
};
