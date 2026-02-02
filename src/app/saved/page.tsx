'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '@/components/AuthContext';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Bookmark, Trash2, Search, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function SavedSearchesPage() {
    const { user, loading, removeSavedSearch } = useAuth();
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
                    <h2>Please log in to view your saved searches.</h2>
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

    const formatDate = (ts: number) => {
        return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(ts));
    };

    const handleRunSearch = (params: Record<string, string>) => {
        // Construct query string
        const searchParams = new URLSearchParams();
        Object.entries(params).forEach(([key, value]) => {
            searchParams.append(key, value);
        });
        router.push(`/?${searchParams.toString()}`);
    };

    return (
        <div className="layout-container">
            <main className="main-content" style={{ overflowY: 'auto', padding: '2rem' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '2rem' }}>
                        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginBottom: '1rem', fontWeight: 500 }}>
                            <ArrowLeft size={16} /> Back to Inventory
                        </Link>
                        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <Bookmark fill="var(--primary)" color="var(--primary)" /> Saved Searches
                        </h1>
                        <p style={{ color: 'var(--text-secondary)' }}>You have {user.savedSearches.length} saved searches.</p>
                    </div>

                    {user.savedSearches.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '4rem', background: 'var(--bg-secondary)', borderRadius: '16px', border: '1px dashed var(--bg-tertiary)' }}>
                            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>No saved searches yet.</p>
                            <Link href="/">
                                <button style={{ padding: '0.75rem 1.5rem', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 }}>
                                    Start Searching
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {user.savedSearches.map(search => (
                                <div key={search.id} style={{
                                    background: 'var(--bg-secondary)',
                                    borderRadius: '12px',
                                    border: '1px solid var(--bg-tertiary)',
                                    padding: '1.5rem',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    boxShadow: 'var(--shadow-sm)',
                                    transition: 'transform 0.2s',
                                }}>
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                                            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>{search.name}</h3>
                                            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                <Calendar size={12} /> {formatDate(search.timestamp)}
                                            </span>
                                        </div>
                                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                            {Object.entries(search.params).map(([key, value]) => {
                                                if (!value) return null;
                                                return (
                                                    <span key={key} style={{ fontSize: '0.75rem', background: 'var(--bg-primary)', padding: '4px 8px', borderRadius: '4px', border: '1px solid var(--bg-tertiary)', color: 'var(--text-secondary)' }}>
                                                        {key}: {value}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <button 
                                            onClick={() => handleRunSearch(search.params)}
                                            style={{
                                                padding: '0.5rem 1rem',
                                                background: 'var(--primary)',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '8px',
                                                cursor: 'pointer',
                                                fontWeight: 600,
                                                display: 'flex', alignItems: 'center', gap: '6px',
                                                fontSize: '0.9rem'
                                            }}
                                        >
                                            <Search size={16} /> Run
                                        </button>
                                        <button 
                                            onClick={() => removeSavedSearch(search.id)}
                                            style={{
                                                padding: '0.5rem',
                                                background: 'transparent',
                                                color: 'var(--text-muted)',
                                                border: '1px solid var(--bg-tertiary)',
                                                borderRadius: '8px',
                                                cursor: 'pointer',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                transition: 'all 0.2s'
                                            }}
                                            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--danger)'; e.currentTarget.style.borderColor = 'var(--danger)'; }}
                                            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--bg-tertiary)'; }}
                                            title="Delete Saved Search"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
