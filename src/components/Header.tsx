'use client';

import Link from 'next/link';
import { useAuth } from './AuthContext';
import ThemeToggle from './ThemeToggle';
import { User, LogOut, Heart, Bookmark, Settings, ChevronDown, UserCircle } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LoginModal from './LoginModal';

export default function Header() {
    const { user, login, logout } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    // Close menu on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header style={{
            height: 'var(--header-height)',
            borderBottom: '1px solid var(--bg-tertiary)',
            background: 'var(--bg-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 1.5rem',
            position: 'sticky',
            top: 0,
            zIndex: 50
        }}>
            {/* Logo */}
            <Link href="/" style={{ fontSize: '1.25rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)' }}>
                <div style={{ width: '24px', height: '24px', background: 'var(--primary)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 2L2 8.6L11.4 12.6L15.4 22L22 2Z" />
                    </svg>
                </div>
                AvComp
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <ThemeToggle />

                {/* User Section */}
                {user ? (
                    <div style={{ position: 'relative' }} ref={menuRef}>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '4px 8px',
                                borderRadius: '8px',
                                transition: 'background 0.2s',
                                outline: 'none'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-tertiary)'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                        >
                            <div style={{
                                width: '32px', height: '32px',
                                borderRadius: '50%',
                                background: 'var(--primary)',
                                color: 'white',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontWeight: 600, fontSize: '0.9rem'
                            }}>
                                {user.name[0].toUpperCase()}
                            </div>
                            <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)', display: 'none', '@media (min-width: 640px)': { display: 'block' } } as any}>{user.name}</span>
                            <ChevronDown size={14} style={{ color: 'var(--text-muted)' }} />
                        </button>

                        {/* Dropdown */}
                        {isMenuOpen && (
                            <div style={{
                                position: 'absolute',
                                top: 'calc(100% + 8px)',
                                right: 0,
                                width: '240px',
                                background: 'var(--bg-secondary)',
                                border: '1px solid var(--bg-tertiary)',
                                borderRadius: '12px',
                                boxShadow: 'var(--shadow-lg)',
                                padding: '8px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '4px',
                                animation: 'fadeIn 0.1s ease-out'
                            }}>
                                <div style={{ padding: '8px 12px', borderBottom: '1px solid var(--bg-tertiary)', marginBottom: '4px' }}>
                                    <p style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>{user.name}</p>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{user.email}</p>
                                </div>

                                <MenuItem 
                                    icon={<UserCircle size={16} />} 
                                    label="My Profile" 
                                    onClick={() => alert("Profile settings would go here.")} 
                                />
                                <MenuItem 
                                    icon={<Heart size={16} />} 
                                    label={`Favorites (${user.favorites.length})`} 
                                    onClick={() => alert("Favorites page would act here.")} 
                                />
                                <MenuItem 
                                    icon={<Bookmark size={16} />} 
                                    label={`Saved Searches (${user.savedSearches.length})`} 
                                    onClick={() => alert("Saved searches modal/page.")} 
                                />
                                <MenuItem 
                                    icon={<Settings size={16} />} 
                                    label="Settings" 
                                    onClick={() => alert("Settings page.")}
                                />

                                <div style={{ height: '1px', background: 'var(--bg-tertiary)', margin: '4px 0' }} />

                                <button
                                    onClick={() => { logout(); setIsMenuOpen(false); }}
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: '10px',
                                        width: '100%', padding: '8px 12px',
                                        background: 'transparent', border: 'none',
                                        borderRadius: '6px', cursor: 'pointer',
                                        color: 'var(--danger)', fontSize: '0.9rem', fontWeight: 500,
                                        transition: 'background 0.2s',
                                        textAlign: 'left'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.background = 'var(--danger-bg)'}
                                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                >
                                    <LogOut size={16} />
                                    Log Out
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <button
                        onClick={() => setShowLogin(true)}
                        style={{
                            padding: '0.5rem 1.25rem',
                            background: 'var(--primary)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                    >
                        <UserCircle size={18} />
                        Log In
                    </button>
                )}
            </div>
            
            {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-5px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </header>
    );
}

function MenuItem({ icon, label, onClick }: { icon: React.ReactNode, label: string, onClick?: () => void }) {
    return (
        <button
            onClick={onClick}
            style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                width: '100%', padding: '8px 12px',
                background: 'transparent', border: 'none',
                borderRadius: '6px', cursor: 'pointer',
                color: 'var(--text-primary)', fontSize: '0.9rem',
                textAlign: 'left'
            }}
             onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-tertiary)'}
             onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
        >
            <span style={{ color: 'var(--text-secondary)' }}>{icon}</span>
            {label}
        </button>
    )
}
