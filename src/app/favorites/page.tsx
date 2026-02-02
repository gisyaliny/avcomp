'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '@/components/AuthContext';
import { MOCK_AIRCRAFT } from '@/lib/mockData';
import AircraftCard from '@/components/AircraftCard';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Heart } from 'lucide-react';
import Link from 'next/link';

export default function FavoritesPage() {
    const { user, loading } = useAuth();
    const router = useRouter();

    if (loading) {
        return (
            <div className="layout-container">
                <main className="main-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    Loading...
                </main>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="layout-container">
                <main className="main-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
                    <h2>Please log in to view your favorites.</h2>
                    <button 
                        onClick={() => router.push('/')}
                        style={{ padding: '0.75rem 1.5rem', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
                    >
                        Go Home
                    </button>
                </main>
            </div>
        );
    }

    const favoriteAircraft = MOCK_AIRCRAFT.filter(ac => user.favorites.includes(ac.id));

    return (
        <div className="layout-container">
            <main className="main-content" style={{ overflowY: 'auto', padding: '2rem' }}>
                <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
                    <div style={{ marginBottom: '2rem' }}>
                        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginBottom: '1rem', fontWeight: 500 }}>
                            <ArrowLeft size={16} /> Back to Inventory
                        </Link>
                        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <Heart fill="var(--primary)" color="var(--primary)" /> My Favorites
                        </h1>
                        <p style={{ color: 'var(--text-secondary)' }}>You have {favoriteAircraft.length} saved aircraft.</p>
                    </div>

                    {favoriteAircraft.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '4rem', background: 'var(--bg-secondary)', borderRadius: '16px', border: '1px dashed var(--bg-tertiary)' }}>
                            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>No favorites yet.</p>
                            <Link href="/">
                                <button style={{ padding: '0.75rem 1.5rem', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 }}>
                                    Browse Inventory
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                            {favoriteAircraft.map(ac => (
                                <AircraftCard 
                                    key={ac.id} 
                                    data={ac} 
                                    onClick={() => router.push(`/inventory/${ac.id}`)}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
