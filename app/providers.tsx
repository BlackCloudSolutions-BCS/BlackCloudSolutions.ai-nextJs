'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from '@/hooks/Auth/useAuth';
import { ClientAPIAxiosProvider } from '@/hooks/Axios/useClientAPIAxiosInstance';
import { LanguageProvider } from '@/hooks/Language/useLanguage';
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
      <LanguageProvider>
        <AuthProvider>
          <ClientAPIAxiosProvider>
            {children}
            <Toaster position="top-right" />
          </ClientAPIAxiosProvider>
        </AuthProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}
