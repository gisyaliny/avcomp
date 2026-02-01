'use client';

import React, { useState } from 'react';
import { X, Mail, Github, LogIn } from 'lucide-react';
import { useAuth } from './AuthContext';

interface Props {
    onClose: () => void;
}

export default function LoginModal({ onClose }: Props) {
    const { login } = useAuth();
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            login(email);
            onClose();
        }
    };

    return (
        <div style={overlayStyle} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
            <div style={modalStyle}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Welcome Back</h2>
                    <button onClick={onClose} style={closeBtnStyle}><X size={24} /></button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                    <button style={socialBtnStyle}>
                         <div style={{ width: '24px', height: '24px', background: 'black', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.8rem' }}>G</div>
                        Continue with Google
                    </button>
                    <button style={socialBtnStyle}>
                        <Github size={20} />
                        Continue with GitHub
                    </button>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ flex: 1, height: '1px', background: 'var(--bg-tertiary)' }} />
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>OR</span>
                    <div style={{ flex: 1, height: '1px', background: 'var(--bg-tertiary)' }} />
                </div>

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={labelStyle}>Email Address</label>
                        <input 
                            type="email" 
                            required 
                            placeholder="name@company.com" 
                            style={inputStyle}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <button type="submit" style={primaryBtnStyle}>
                        <LogIn size={18} /> Log In with Email
                    </button>
                </form>

                <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
                    Don't have an account? <span style={{ color: 'var(--primary)', fontWeight: 600, cursor: 'pointer' }}>Sign up</span>
                </p>
            </div>
        </div>
    );
}

// Styles reuse similar design system
const overlayStyle: React.CSSProperties = {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
    zIndex: 3000, display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: '1rem'
};

const modalStyle: React.CSSProperties = {
    background: 'var(--bg-secondary)', 
    width: '100%', maxWidth: '400px',
    borderRadius: '16px', padding: '2.5rem',
    boxShadow: 'var(--shadow-lg)',
    animation: 'scaleIn 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
};

const closeBtnStyle: React.CSSProperties = {
    background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-muted)'
};

const labelStyle: React.CSSProperties = {
    display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)'
};

const inputStyle: React.CSSProperties = {
    width: '100%', padding: '0.75rem', borderRadius: '8px',
    border: '1px solid var(--bg-tertiary)', background: 'var(--bg-primary)',
    color: 'var(--text-primary)', fontSize: '1rem', outline: 'none',
    transition: 'border-color 0.2s'
};

const primaryBtnStyle: React.CSSProperties = {
    width: '100%', padding: '0.875rem', borderRadius: '8px',
    background: 'var(--primary)', color: 'white', border: 'none',
    fontSize: '1rem', fontWeight: 600, cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
    boxShadow: '0 4px 6px rgba(14, 165, 233, 0.2)'
};

const socialBtnStyle: React.CSSProperties = {
    width: '100%', padding: '0.75rem', borderRadius: '8px',
    background: 'var(--bg-primary)', border: '1px solid var(--bg-tertiary)',
    color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: 500,
    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
    transition: 'background 0.2s'
};
