'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import React from 'react';

import { AuthProvider } from './AuthContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider defaultTheme="dark" attribute="data-theme">
        <AuthProvider>
            {children}
        </AuthProvider>
    </NextThemesProvider>
  );
}
