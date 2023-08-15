import axios, { AxiosInstance } from 'axios';

export const request: AxiosInstance = axios.create({
  baseURL: 'https://vodiy-parfum-backend.vercel.app/api/v1/',
  timeout: 10000,
})