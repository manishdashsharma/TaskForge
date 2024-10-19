import { servicesAxiosInstance } from './config';
import { HealthApiResponse } from '../types/healthTypes';
import { ConfirmationData, ConfirmationResponse, SignInData, SignInResponse, SignUpData, SignUpResponse } from '../types/authenticationTypes';

const getServerStatus = async (): Promise<HealthApiResponse> => {
  const response = await servicesAxiosInstance.get<HealthApiResponse>('/api/v1/health');
  return response.data;
};

const SignUpapi = async (data: SignUpData): Promise<SignUpResponse> => {
  const response = await servicesAxiosInstance.post<SignUpResponse>('/api/v1/register', data);
  return response.data;
};


const SignInapi = async (data: SignInData): Promise<SignInResponse> => {
  const response = await servicesAxiosInstance.post<SignInResponse>('/api/v1/login', data);
  return response.data;
};

const Confirmationapi = async (data: ConfirmationData): Promise<ConfirmationResponse> => {
  const response = await servicesAxiosInstance.put<ConfirmationResponse>(`/api/v1/confirmation/${data.token}?code=${data.code}`,data);
  return response.data;
};

export {
  getServerStatus,
  SignUpapi,
 Confirmationapi,
 SignInapi
};
