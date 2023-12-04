import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import getAccessToken from '../actions/getAccessToken';

const API_ENDPOINT: string = process.env.API_BASE_URL || 'http://localhost:8000/';
const config: AxiosRequestConfig = {
  baseURL: `${API_ENDPOINT}api/`,
};

const httpClient: AxiosInstance = axios.create(config);
const accessToken = getAccessToken();

const authInterceptor = (config: InternalAxiosRequestConfig) => {
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
};

httpClient.interceptors.request.use(authInterceptor);

httpClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export default httpClient;