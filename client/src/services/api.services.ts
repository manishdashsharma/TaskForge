import { servicesAxiosInstance } from './config';
import { HealthApiResponse } from '../types/types';

const getServerStatus = async (): Promise<HealthApiResponse> => {
  const response = await servicesAxiosInstance.get<HealthApiResponse>('/api/v1/health');
  return response.data;
};

const SignUpapi = async (data: any) => {
  const response = await servicesAxiosInstance.post('/api/v1/register', data);
  return response.data;
};

export {
  getServerStatus,SignUpapi
};
