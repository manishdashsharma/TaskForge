import { servicesAxiosInstance } from './config';
import { HealthApiResponse } from '../types/types';

const getServerStatus = async (): Promise<HealthApiResponse> => {
  const response = await servicesAxiosInstance.get<HealthApiResponse>('/api/v1/health');
  return response.data;
};

export {
  getServerStatus
};
