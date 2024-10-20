import { servicesAxiosInstance } from './config';
import { HealthApiResponse } from '../types/healthTypes';
import { ForgotPasswordData, ForgotPasswordResponse, SignUpData, SignUpResponse } from '../types/authenticationTypes';

const getServerStatus = async (): Promise<HealthApiResponse> => {
  const response = await servicesAxiosInstance.get<HealthApiResponse>('/api/v1/health');
  return response.data;
};

const SignUpapi = async (data: SignUpData): Promise<SignUpResponse> => {
  const response = await servicesAxiosInstance.post<SignUpResponse>('/api/v1/register', data);
  return response.data;
};

const ForgotPasswordapi = async (data: ForgotPasswordData): Promise<ForgotPasswordResponse> => {
  const response = await servicesAxiosInstance.put<ForgotPasswordResponse>('/api/v1/forgot-password', data);
  return response.data;
}

export {
  getServerStatus,
  ForgotPasswordapi,
  SignUpapi
};
