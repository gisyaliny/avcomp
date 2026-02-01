'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import React from 'react';

import { AuthProvider } from './AuthContext';
import { UIProvider } from './UIContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider defaultTheme="dark" attribute="data-theme">
        <UIProvider>
            <AuthProvider>
                {children}
            </AuthProvider>
        </UIProvider>
    </NextThemesProvider>
  );
}
