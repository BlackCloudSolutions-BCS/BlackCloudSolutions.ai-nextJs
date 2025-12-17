'use client';

import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import useLocalStorage from '../localStorage/useLocalStorage';

interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  is_admin: boolean;
  address: string | null;
  phone_number: string | null;
}

interface UserViewModel {
  email: string;
  token: string;
  refreshToken?: string;
  user?: User;
}

type AuthContextType = {
  clientUser: UserViewModel | null;
  setClientUser: (value: UserViewModel | null) => void;
  apiUrl: string;
  setApiUrl: (value: string) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [clientUser, setClientUser] = useLocalStorage<UserViewModel | null>('user', null);
  const [apiUrl, setApiUrl] = useState<string>('');

  useEffect(() => {
    if (API_URL) {
      setApiUrl(API_URL);
    } else {
      console.error('NEXT_PUBLIC_API_URL is not defined in the environment.');
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        clientUser,
        setClientUser,
        apiUrl,
        setApiUrl,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export default useAuth;
