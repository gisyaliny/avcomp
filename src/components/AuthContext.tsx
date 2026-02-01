'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// Types
export interface User {
    id: string;
    email: string;
    name: string;
    favorites: string[]; // List of Aircraft IDs
    savedSearches: SavedSearch[];
}

export interface SavedSearch {
    id: string;
    name: string;
    timestamp: number;
    params: Record<string, string>;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string) => void;
    logout: () => void;
    toggleFavorite: (aircraftId: string) => void;
    saveSearch: (name: string, params: Record<string, string>) => void;
    removeSavedSearch: (id: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const MOCK_USER: User = {
    id: 'user_123',
    email: 'pilot@example.com',
    name: 'Demo Pilot',
    favorites: ['1', '3'], // Initial mock favorites
    savedSearches: [
        { id: 's1', name: 'My Gulfstream Search', timestamp: Date.now(), params: { make: 'Gulfstream', minRange: '5000' } }
    ]
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    // Load user from local storage on mount (simulated persistence)
    useEffect(() => {
        const stored = localStorage.getItem('avcomp_user');
        if (stored) {
            try {
                setUser(JSON.parse(stored));
            } catch (e) {
                console.error("Failed to parse user", e);
            }
        }
    }, []);

    const login = (email: string) => {
        // Mock Login
        const newUser = { ...MOCK_USER, email, name: email.split('@')[0] };
        setUser(newUser);
        localStorage.setItem('avcomp_user', JSON.stringify(newUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('avcomp_user');
    };

    const toggleFavorite = (aircraftId: string) => {
        if (!user) return; // Must be logged in
        
        const isFav = user.favorites.includes(aircraftId);
        const newFavorites = isFav 
            ? user.favorites.filter(id => id !== aircraftId)
            : [...user.favorites, aircraftId];
        
        const updatedUser = { ...user, favorites: newFavorites };
        setUser(updatedUser);
        localStorage.setItem('avcomp_user', JSON.stringify(updatedUser));
    };

    const saveSearch = (name: string, params: Record<string, string>) => {
        if (!user) return;
        
        const newSearch: SavedSearch = {
            id: crypto.randomUUID(),
            name,
            timestamp: Date.now(),
            params
        };

        const updatedUser = { ...user, savedSearches: [newSearch, ...user.savedSearches] };
        setUser(updatedUser);
        localStorage.setItem('avcomp_user', JSON.stringify(updatedUser));
    };

    const removeSavedSearch = (id: string) => {
         if (!user) return;
         const updatedUser = { ...user, savedSearches: user.savedSearches.filter(s => s.id !== id) };
         setUser(updatedUser);
         localStorage.setItem('avcomp_user', JSON.stringify(updatedUser));
    };

    return (
        <AuthContext.Provider value={{ 
            user, 
            isAuthenticated: !!user, 
            login, 
            logout, 
            toggleFavorite, 
            saveSearch, 
            removeSavedSearch 
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
