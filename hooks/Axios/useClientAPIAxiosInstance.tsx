'use client';

import React, { createContext, useContext, useMemo, ReactNode, useRef, useEffect } from 'react';
import axios, { AxiosInstance, AxiosError, InternalAxiosRequestConfig } from 'axios';
import useAuth from '../Auth/useAuth';
import { useRouter } from 'next/navigation';

export type AxiosContextType = {
  axiosInstance: AxiosInstance;
};

const AxiosContext = createContext<AxiosContextType | null>(null);

// Token refresh interval: 29 minutes
const TOKEN_REFRESH_INTERVAL = 29 * 60 * 1000;

export const ClientAPIAxiosProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const auth = useAuth();
  const router = useRouter();
  const isRefreshing = useRef(false);
  const failedQueue = useRef<any[]>([]);
  const refreshTimerRef = useRef<NodeJS.Timeout | null>(null);

  const processQueue = (error: any, token: string | null = null) => {
    failedQueue.current.forEach((prom) => {
      if (error) {
        prom.reject(error);
      } else {
        prom.resolve(token);
      }
    });
    failedQueue.current = [];
  };

  const refreshAuthToken = async () => {
    const refreshToken = auth?.clientUser?.refreshToken;

    if (!refreshToken || isRefreshing.current) {
      return;
    }

    try {
      isRefreshing.current = true;
      console.log('Refreshing token automatically...');

      const response = await axios.post(
        `${auth?.apiUrl}/auth/refresh`,
        { refresh_token: refreshToken }
      );

      const { access_token, refresh_token } = response.data;

      auth?.setClientUser({
        email: auth?.clientUser?.email || '',
        token: access_token,
        refreshToken: refresh_token,
        user: auth?.clientUser?.user,
      });

      console.log('Token refreshed successfully');
      isRefreshing.current = false;
    } catch (error) {
      console.error('Failed to refresh token:', error);
      isRefreshing.current = false;
      auth?.setClientUser(null);
      router.push('/admin');
    }
  };

  // Auto-refresh token every 29 minutes
  useEffect(() => {
    if (refreshTimerRef.current) {
      clearInterval(refreshTimerRef.current);
    }

    if (auth?.clientUser?.token && auth?.clientUser?.refreshToken) {
      refreshTimerRef.current = setInterval(() => {
        refreshAuthToken();
      }, TOKEN_REFRESH_INTERVAL);
    }

    return () => {
      if (refreshTimerRef.current) {
        clearInterval(refreshTimerRef.current);
        refreshTimerRef.current = null;
      }
    };
  }, [auth?.clientUser?.token, auth?.clientUser?.refreshToken]);

  const axiosInstance = useMemo(() => {
    const instance = axios.create({
      baseURL: auth?.apiUrl,
      timeout: 60000,
      headers: { 'Authorization': `Bearer ${auth?.clientUser?.token}` }
    });

    // Add token to all requests
    instance.interceptors.request.use(
      (config) => {
        const token = auth?.clientUser?.token;
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Handle 401 errors with automatic token refresh
    instance.interceptors.response.use(
      response => response,
      async (error: AxiosError) => {
        const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };
        const statusCode = error.response ? error.response.status : null;

        if (statusCode === 401 && !originalRequest._retry) {
          if (isRefreshing.current) {
            return new Promise((resolve, reject) => {
              failedQueue.current.push({ resolve, reject });
            })
              .then((token) => {
                originalRequest.headers.Authorization = `Bearer ${token}`;
                return instance(originalRequest);
              })
              .catch((err) => Promise.reject(err));
          }

          originalRequest._retry = true;
          isRefreshing.current = true;

          const refreshToken = auth?.clientUser?.refreshToken;

          if (!refreshToken) {
            auth?.setClientUser(null);
            router.push('/admin');
            return Promise.reject(error);
          }

          try {
            const response = await axios.post(
              `${auth?.apiUrl}/auth/refresh`,
              { refresh_token: refreshToken }
            );

            const { access_token, refresh_token } = response.data;

            auth?.setClientUser({
              email: auth?.clientUser?.email || '',
              token: access_token,
              refreshToken: refresh_token,
              user: auth?.clientUser?.user,
            });

            originalRequest.headers.Authorization = `Bearer ${access_token}`;

            processQueue(null, access_token);
            isRefreshing.current = false;

            return instance(originalRequest);
          } catch (refreshError) {
            processQueue(refreshError, null);
            isRefreshing.current = false;
            auth?.setClientUser(null);
            router.push('/admin');
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      }
    );
    return instance;
  }, [auth, router]);

  return (
    <AxiosContext.Provider value={{ axiosInstance }}>
      {children}
    </AxiosContext.Provider>
  );
};

export const useAxios = () => {
  const context = useContext(AxiosContext);
  if (!context) {
    throw new Error('useAxios must be used within an AxiosProvider');
  }
  return context;
};
