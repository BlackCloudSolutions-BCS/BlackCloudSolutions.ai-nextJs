'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import useAuth from '../Auth/useAuth';
import { useRouter } from 'next/navigation';

interface LoginRequest {
  email: string;
  password: string;
}

interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  is_admin: boolean;
  address: string | null;
  phone_number: string | null;
}

interface AuthData {
  access_token: string;
  refresh_token: string;
  is_admin: boolean;
  user: User;
}

interface AuthResponse {
  success: boolean;
  message: string;
  data: AuthData;
}

// Login mutation
export const useLogin = () => {
  const auth = useAuth();
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: LoginRequest) => {
      const response = await axios.post<AuthResponse>(
        `${auth?.apiUrl}/auth/login`,
        data
      );
      return response.data.data;
    },
    onSuccess: (data) => {
      // Verify user is admin
      if (!data.is_admin) {
        throw new Error('Access denied. Admin privileges required.');
      }

      // Store user data with both access and refresh tokens
      auth?.setClientUser({
        email: data.user.email,
        token: data.access_token,
        refreshToken: data.refresh_token,
        user: data.user,
      });
      queryClient.invalidateQueries();
      router.push('/admin/blog-manager');
    },
    onError: (error: any) => {
      console.error('Login error:', error);
    },
  });
};

// Logout mutation
export const useLogout = () => {
  const auth = useAuth();
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      // Call logout API
      await axios.post(
        `${auth?.apiUrl}/auth/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${auth?.clientUser?.token}`,
          },
        }
      );
    },
    onSettled: () => {
      // Clear auth state regardless of API response
      auth?.setClientUser(null);
      queryClient.clear();
      router.push('/admin');
    },
  });
};
