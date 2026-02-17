import axios from 'axios';
import { useAuthStore } from '../store/auth-store';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:8000/api',
  timeout: 15_000,
});

apiClient.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

let isRefreshing = false;
let pendingQueue: Array<(token: string) => void> = [];

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status !== 401 || originalRequest?._retry) {
      return Promise.reject(error);
    }

    const { refreshToken, clearAuth, setAuth, user } = useAuthStore.getState();
    if (!refreshToken || !user) {
      clearAuth();
      return Promise.reject(error);
    }

    if (isRefreshing) {
      return new Promise((resolve) => {
        pendingQueue.push((token: string) => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          resolve(apiClient(originalRequest));
        });
      });
    }

    isRefreshing = true;
    originalRequest._retry = true;

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:8000/api'}/auth/refresh`,
        { refreshToken },
      );

      const nextAccess = response.data.accessToken as string;
      const nextRefresh = (response.data.refreshToken as string) ?? refreshToken;
      setAuth({ accessToken: nextAccess, refreshToken: nextRefresh, user });

      pendingQueue.forEach((handler) => handler(nextAccess));
      pendingQueue = [];

      originalRequest.headers.Authorization = `Bearer ${nextAccess}`;
      return apiClient(originalRequest);
    } catch (refreshError) {
      clearAuth();
      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  },
);

export { apiClient };
