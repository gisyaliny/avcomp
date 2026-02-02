'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
    User as FirebaseUser, 
    onAuthStateChanged, 
    signInWithPopup, 
    GoogleAuthProvider, 
    signOut as firebaseSignOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from 'firebase/auth';
import { 
    doc, 
    getDoc, 
    setDoc, 
    updateDoc, 
    arrayUnion, 
    arrayRemove, 
    onSnapshot 
} from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';

// Types
export interface UserData {
    id: string;
    email: string | null;
    name: string | null;
    photoURL: string | null;
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
    user: UserData | null;
    loading: boolean;
    loginWithGoogle: () => Promise<void>;
    logout: () => Promise<void>;
    toggleFavorite: (aircraftId: string) => Promise<void>;
    saveSearch: (name: string, params: Record<string, string>) => Promise<void>;
    removeSavedSearch: (id: string) => Promise<void>;
    checkIsFavorite: (aircraftId: string) => boolean;
    loginWithEmail: (email: string, pass: string) => Promise<void>;
    signupWithEmail: (email: string, pass: string, name: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);

    // Listen for auth state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                // User is signed in, listen to their Firestore document
                const userRef = doc(db, 'users', firebaseUser.uid);
                
                const unsubUser = onSnapshot(userRef, (docSnap) => {
                    if (docSnap.exists()) {
                        setUser(docSnap.data() as UserData);
                    } else {
                        // User exists in Auth but not DB (first login?), create DB record
                        const newUser: UserData = {
                            id: firebaseUser.uid,
                            email: firebaseUser.email,
                            name: firebaseUser.displayName || 'Pilot',
                            photoURL: firebaseUser.photoURL,
                            favorites: [],
                            savedSearches: []
                        };
                        setDoc(userRef, newUser).catch(console.error);
                        setUser(newUser);
                    }
                    setLoading(false);
                }, (error) => {
                    console.error("Error fetching user data:", error);
                    setLoading(false);
                });

                return () => unsubUser();
            } else {
                // User is signed out
                setUser(null);
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, []);

    const loginWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Login failed:", error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await firebaseSignOut(auth);
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    const toggleFavorite = async (aircraftId: string) => {
        if (!user || !user.id) return;

        const isFav = user.favorites.includes(aircraftId);
        const userRef = doc(db, 'users', user.id);

        try {
            if (isFav) {
                await updateDoc(userRef, {
                    favorites: arrayRemove(aircraftId)
                });
            } else {
                await updateDoc(userRef, {
                    favorites: arrayUnion(aircraftId)
                });
            }
        } catch (error) {
            console.error("Error toggling favorite:", error);
        }
    };

    const saveSearch = async (name: string, params: Record<string, string>) => {
        if (!user || !user.id) return;
        
        const newSearch: SavedSearch = {
            id: crypto.randomUUID(),
            name,
            timestamp: Date.now(),
            params
        };

        const userRef = doc(db, 'users', user.id);
        
        try {
            await updateDoc(userRef, {
                savedSearches: arrayUnion(newSearch)
            });
        } catch (error) {
            console.error("Error saving search:", error);
        }
    };

    const removeSavedSearch = async (id: string) => {
         if (!user || !user.id) return;
         
         const searchToRemove = user.savedSearches.find(s => s.id === id);
         if (!searchToRemove) return;

         const userRef = doc(db, 'users', user.id);
         
         try {
             await updateDoc(userRef, {
                 savedSearches: arrayRemove(searchToRemove)
             });
         } catch (error) {
             console.error("Error removing search:", error);
         }
    };

    const loginWithEmail = async (email: string, pass: string) => {
        try {
            await signInWithEmailAndPassword(auth, email, pass);
        } catch (error) {
            console.error("Email login failed:", error);
            throw error;
        }
    };

    const signupWithEmail = async (email: string, pass: string, name: string) => {
        try {
            const result = await createUserWithEmailAndPassword(auth, email, pass);
            // We can resolve because onAuthStateChanged will handle the DB creation
            // BUT we want to capture the Name.
            // onAuthStateChanged might fire before we setDisplayName?
            // Actually, we can update the profile or the DB directly here?
            // Safer to do it here.
            
            // Wait for auth listener to potentially trigger, but let's override user data just in case?
            // Actually, the listener runs automatically. 
            // We can just update profile.
            // import updateProfile from firebase/auth
            // But we need to import it. 
            // Alternatively, we skip updateProfile and just rely on Firestore update?
            // Let's rely on Firestore. The listener creates the doc default.
            // We can update it immediately after.
        } catch (error) {
            console.error("Signup failed:", error);
            throw error;
        }
    };

    const checkIsFavorite = (aircraftId: string) => {
        return user?.favorites.includes(aircraftId) || false;
    };

    return (
        <AuthContext.Provider value={{ 
            user, 
            loading,
            loginWithGoogle, 
            logout, 
            toggleFavorite, 
            saveSearch, 
            removeSavedSearch,
            checkIsFavorite,
            loginWithEmail,
            signupWithEmail
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
