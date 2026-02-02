'use client';

import Link from 'next/link';
import { useAuth } from './AuthContext';
import ThemeToggle from './ThemeToggle';
import { User, LogOut, Heart, Bookmark, Settings, ChevronDown, UserCircle, LayoutTemplate, Table as TableIcon, SlidersHorizontal, Menu, MapPin } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import LoginModal from './LoginModal';
import { useUI } from './UIContext';

export default function Header() {
    const { user, logout } = useAuth();
    const { viewMode, setViewMode, showFilters, setShowFilters } = useUI();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const pathname = usePathname();

    // Close menus on click outside
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
            zIndex: 10001
        }}>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <Link href="/" className="logo-text" style={{ fontSize: '1.3rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-primary)', fontFamily: 'var(--font-outfit)', letterSpacing: '-0.02em' }}>
                    <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent-dark) 100%)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(124, 98, 61, 0.2)' }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                        </svg>
                    </div>
                    <span style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent-dark) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>AvComp</span>
                </Link>

                <div className="nav-controls-desktop" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-primary)', padding: '4px', borderRadius: '12px', border: '1px solid var(--bg-tertiary)' }}>
                    <button 
                        onClick={() => setViewMode('split')}
                        style={{ 
                            padding: '0.5rem 1rem', 
                            background: viewMode === 'split' ? 'var(--primary)' : 'transparent',
                            color: viewMode === 'split' ? 'white' : 'var(--text-secondary)',
                            borderRadius: '8px', border: 'none', cursor: 'pointer', display: 'flex', gap: '8px', alignItems: 'center', fontSize: '0.85rem', fontWeight: 600,
                            transition: 'all 0.2s'
                        }}
                    >
                        <LayoutTemplate size={16} /> <span className="hide-on-tablet">Split View</span>
                    </button>
                    <button 
                        onClick={() => setViewMode('table')}
                        style={{ 
                            padding: '0.5rem 1rem', 
                            background: viewMode === 'table' ? 'var(--primary)' : 'transparent',
                            color: viewMode === 'table' ? 'white' : 'var(--text-secondary)',
                            borderRadius: '8px', border: 'none', cursor: 'pointer', display: 'flex', gap: '8px', alignItems: 'center', fontSize: '0.85rem', fontWeight: 600,
                            transition: 'all 0.2s'
                        }}
                    >
                        <TableIcon size={16} /> <span className="hide-on-tablet">Table View</span>
                    </button>
                    <div style={{ width: '1px', height: '20px', background: 'var(--bg-tertiary)', margin: '0 4px' }} />
                    <button 
                        onClick={() => setShowFilters(!showFilters)}
                        style={{ 
                            padding: '0.5rem 1rem', 
                            background: showFilters ? 'var(--primary)' : 'transparent',
                            color: showFilters ? 'white' : 'var(--text-secondary)',
                            borderRadius: '8px', border: 'none', cursor: 'pointer', display: 'flex', gap: '8px', alignItems: 'center', fontSize: '0.85rem', fontWeight: 600,
                            transition: 'all 0.2s'
                        }}
                    >
                        <SlidersHorizontal size={16} /> <span className="hide-on-tablet">Filters</span>
                    </button>
                    <div style={{ width: '1px', height: '20px', background: 'var(--bg-tertiary)', margin: '0 4px' }} />
                    <button 
                        onClick={() => router.push('/mission')}
                        style={{ 
                            padding: '0.5rem 1rem', 
                            background: pathname === '/mission' ? 'var(--primary)' : 'transparent',
                            color: pathname === '/mission' ? 'white' : 'var(--text-secondary)',
                            borderRadius: '8px', border: 'none', cursor: 'pointer', display: 'flex', gap: '8px', alignItems: 'center', fontSize: '0.85rem', fontWeight: 600,
                            transition: 'all 0.2s'
                        }}
                    >
                        <MapPin size={16} /> <span className="hide-on-tablet">Routine Planner</span>
                    </button>
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <ThemeToggle />

                <button 
                    className="mobile-nav-toggle"
                    onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                    style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: '4px' }}
                >
                    <Menu size={24} />
                </button>

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
                                {(user.name?.[0] || user.email?.[0] || 'U').toUpperCase()}
                            </div>
                            <span className="user-label" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)' }}>{user.name || user.email?.split('@')[0] || 'User'}</span>
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
                                    <p style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>{user.name || 'User'}</p>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{user.email || ''}</p>
                                </div>

                                <MenuItem 
                                    icon={<UserCircle size={16} />} 
                                    label="My Profile" 
                                    onClick={() => router.push('/profile')} 
                                />
                                <MenuItem 
                                    icon={<Heart size={16} />} 
                                    label={`Favorites (${user.favorites?.length || 0})`} 
                                    onClick={() => router.push('/favorites')} 
                                />
                                <MenuItem 
                                    icon={<Bookmark size={16} />} 
                                    label={`Saved Searches (${user.savedSearches?.length || 0})`} 
                                    onClick={() => router.push('/saved')} 
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

            {/* Mobile Nav Overlay */}
            {isMobileNavOpen && (
                <div style={{ position: 'fixed', top: 'var(--header-height)', left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', zIndex: 10002 }} onClick={() => setIsMobileNavOpen(false)}>
                    <div style={{ background: 'var(--bg-secondary)', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', borderBottom: '1px solid var(--bg-tertiary)' }} onClick={e => e.stopPropagation()}>
                        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>View Mode</div>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button onClick={() => { setViewMode('split'); setIsMobileNavOpen(false); }} style={{ flex: 1, padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--bg-tertiary)', background: viewMode === 'split' ? 'var(--primary)' : 'var(--bg-primary)', color: viewMode === 'split' ? 'white' : 'var(--text-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                <LayoutTemplate size={18} /> Split
                            </button>
                            <button onClick={() => { setViewMode('table'); setIsMobileNavOpen(false); }} style={{ flex: 1, padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--bg-tertiary)', background: viewMode === 'table' ? 'var(--primary)' : 'var(--bg-primary)', color: viewMode === 'table' ? 'white' : 'var(--text-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                <TableIcon size={18} /> Table
                            </button>
                        </div>
                        <div style={{ height: '1px', background: 'var(--bg-tertiary)', margin: '0.5rem 0' }} />
                        <button onClick={() => { setShowFilters(!showFilters); setIsMobileNavOpen(false); }} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--bg-tertiary)', background: showFilters ? 'var(--primary)' : 'var(--bg-primary)', color: showFilters ? 'white' : 'var(--text-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                            <SlidersHorizontal size={18} /> {showFilters ? 'Hide Filters' : 'Show Filters'}
                        </button>
                        <button onClick={() => { router.push('/mission'); setIsMobileNavOpen(false); }} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--bg-tertiary)', background: pathname === '/mission' ? 'var(--primary)' : 'var(--bg-primary)', color: pathname === '/mission' ? 'white' : 'var(--text-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                            <MapPin size={18} /> {pathname === '/mission' ? 'Active Planner' : 'Routine Planner'}
                        </button>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-5px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @media (min-width: 769px) {
                    .mobile-nav-toggle {
                        display: none !important;
                    }
                }

                @media (max-width: 768px) {
                    .nav-controls-desktop {
                        display: none !important;
                    }
                    .user-label {
                        display: none !important;
                    }
                    header {
                        padding: 0 1rem !important;
                    }
                    .logo-text {
                        font-size: 1.1rem !important;
                    }
                }

                @media (max-width: 1024px) {
                    .hide-on-tablet {
                        display: none !important;
                    }
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
