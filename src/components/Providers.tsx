'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import React from 'react';

import { Suspense } from 'react';
import { AuthProvider } from './AuthContext';
import { UIProvider } from './UIContext';
import { ListingDetailModalProvider } from './ListingDetailModalContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider defaultTheme="dark" attribute="data-theme">
        <Suspense fallback={null}>
            <UIProvider>
                <AuthProvider>
                    <ListingDetailModalProvider>{children}</ListingDetailModalProvider>
                </AuthProvider>
            </UIProvider>
        </Suspense>
    </NextThemesProvider>
  );
}
