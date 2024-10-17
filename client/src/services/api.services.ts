import { servicesAxiosInstance } from './config';
import { HealthApiResponse } from '../types/healthTypes';
import { SignUpData, SignUpResponse } from '../types/authenticationTypes';

const getServerStatus = async (): Promise<HealthApiResponse> => {
  const response = await servicesAxiosInstance.get<HealthApiResponse>('/api/v1/health');
  return response.data;
};

const SignUpapi = async (data: SignUpData): Promise<SignUpResponse> => {
  const response = await servicesAxiosInstance.post<SignUpResponse>('/api/v1/register', data);
  return response.data;
};

export {
  getServerStatus,
  SignUpapi
};
