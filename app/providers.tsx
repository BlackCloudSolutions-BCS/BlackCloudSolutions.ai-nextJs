'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from '@/hooks/Auth/useAuth';
import { ClientAPIAxiosProvider } from '@/hooks/Axios/useClientAPIAxiosInstance';
import { Toaster } from 'sonner';
import { ReactNode, useState } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 1,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ClientAPIAxiosProvider>
          {children}
          <Toaster position="top-right" />
        </ClientAPIAxiosProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
