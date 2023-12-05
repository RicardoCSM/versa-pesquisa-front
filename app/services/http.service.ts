import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import authService from './auth.service';

const API_ENDPOINT: string = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/';
const config: AxiosRequestConfig = {
  baseURL: `${API_ENDPOINT}`,
};

const httpClient: AxiosInstance = axios.create(config);

const authInterceptor = (config: InternalAxiosRequestConfig) => {
  config.headers.Authorization = `Bearer ${authService.getToken()}`;
  return config;
};

httpClient.interceptors.request.use(authInterceptor);

httpClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log(error);
    }
    return Promise.reject(error);
  }
);

export default httpClient;