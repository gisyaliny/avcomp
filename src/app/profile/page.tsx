'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '@/components/AuthContext';
import { useRouter } from 'next/navigation';
import { User, Mail, LogOut, ArrowLeft, Heart, Bookmark } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProfilePage() {
    const { user, loading, logout } = useAuth();
    const router = useRouter();

    const handleLogout = async () => {
        await logout();
        router.push('/');
    };

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
        router.push('/');
        return null;
    }

    return (
        <div className="layout-container">
            <main className="main-content" style={{ overflowY: 'auto', padding: '2rem' }}>
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    
                    <div style={{ marginBottom: '2rem' }}>
                         <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginBottom: '1rem', fontWeight: 500 }}>
                            <ArrowLeft size={16} /> Back to Inventory
                        </Link>
                        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)' }}>My Profile</h1>
                    </div>

                    <div style={{ background: 'var(--bg-secondary)', borderRadius: '16px', border: '1px solid var(--bg-tertiary)', padding: '2rem', marginBottom: '2rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', fontWeight: 700, color: 'white', overflow: 'hidden', position: 'relative' }}>
                                {user.photoURL ? (
                                    <Image src={user.photoURL} alt="Profile" fill style={{ objectFit: 'cover' }} />
                                ) : (
                                    (user.name?.[0] || user.email?.[0] || 'U').toUpperCase()
                                )}
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>{user.name || 'Pilot'}</h2>
                                <p style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                                    <Mail size={14} /> {user.email}
                                </p>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                            <Link href="/favorites">
                                <div style={{ background: 'var(--bg-primary)', padding: '1.5rem', borderRadius: '12px', textAlign: 'center', border: '1px solid var(--bg-tertiary)', cursor: 'pointer', transition: 'transform 0.2s', boxShadow: 'var(--shadow-sm)' }}>
                                    <Heart size={24} color="var(--primary)" fill="var(--primary)" style={{ marginBottom: '0.5rem', margin: '0 auto' }} />
                                    <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>{user.favorites.length}</div>
                                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Favorites</div>
                                </div>
                            </Link>
                            <Link href="/saved">
                                <div style={{ background: 'var(--bg-primary)', padding: '1.5rem', borderRadius: '12px', textAlign: 'center', border: '1px solid var(--bg-tertiary)', cursor: 'pointer', transition: 'transform 0.2s', boxShadow: 'var(--shadow-sm)' }}>
                                    <Bookmark size={24} color="var(--primary)" fill="var(--primary)" style={{ marginBottom: '0.5rem', margin: '0 auto' }} />
                                    <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>{user.savedSearches.length}</div>
                                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Saved Searches</div>
                                </div>
                            </Link>
                        </div>

                         <button 
                            onClick={handleLogout}
                            style={{ 
                                width: '100%', 
                                padding: '1rem', 
                                background: 'transparent', 
                                border: '1px solid var(--danger)', 
                                color: 'var(--danger)', 
                                borderRadius: '8px', 
                                fontWeight: 700, 
                                cursor: 'pointer',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                                transition: 'all 0.2s'
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--danger)'; e.currentTarget.style.color = 'white'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--danger)'; }}
                        >
                            <LogOut size={18} /> Sign Out
                        </button>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}
