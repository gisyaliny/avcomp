'use client';

import React, { useState } from 'react';
import { X, Send, CheckCircle, Phone, Mail } from 'lucide-react';

interface Props {
    aircraftTitle: string;
    onClose: () => void;
}

export default function ContactModal({ aircraftTitle, onClose }: Props) {
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setSent(true);
        }, 1000);
    };

    if (sent) {
        return (
            <div style={overlayStyle}>
                <div style={{ ...modalStyle, textAlign: 'center', padding: '3rem' }}>
                    <div style={{ margin: '0 auto 1.5rem', width: '64px', height: '64px', borderRadius: '50%', background: 'var(--success-bg)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                         <CheckCircle size={32} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Message Sent!</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>The seller will contact you shortly regarding the {aircraftTitle}.</p>
                    <button 
                        onClick={onClose}
                        style={primaryBtnStyle}
                    >
                        Close
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div style={overlayStyle} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
            <div style={modalStyle}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <div>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Contact Seller</h2>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Inquiring about: <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{aircraftTitle}</span></p>
                    </div>
                    <button onClick={onClose} style={closeBtnStyle}><X size={24} /></button>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                            <label style={labelStyle}>First Name</label>
                            <input required type="text" style={inputStyle} placeholder="John" />
                        </div>
                        <div>
                            <label style={labelStyle}>Last Name</label>
                            <input required type="text" style={inputStyle} placeholder="Doe" />
                        </div>
                    </div>

                    <div>
                        <label style={labelStyle}>Email Address</label>
                        <input required type="email" style={inputStyle} placeholder="john@example.com" />
                    </div>

                    <div>
                        <label style={labelStyle}>Phone (Optional)</label>
                        <input type="tel" style={inputStyle} placeholder="+1 (555) 000-0000" />
                    </div>

                    <div>
                        <label style={labelStyle}>Message</label>
                        <textarea 
                            required 
                            rows={4} 
                            style={{ ...inputStyle, resize: 'vertical' }} 
                            defaultValue={`I am interested in this ${aircraftTitle}. Please send more details.`}
                        />
                    </div>

                    <button type="submit" style={primaryBtnStyle}>
                        <Send size={18} /> Send Inquiry
                    </button>
                    
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '0.5rem' }}>
                        By sending this message, you agree to our Terms of Service and Privacy Policy.
                    </p>
                </form>

                <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--bg-tertiary)' }}>
                    <p style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--text-secondary)' }}>Or contact directly:</p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <div style={contactMethodStyle}>
                            <Phone size={16} /> +1 (800) 555-0199
                        </div>
                        <div style={contactMethodStyle}>
                            <Mail size={16} /> sales@avcomp.com
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const overlayStyle: React.CSSProperties = {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
    zIndex: 3000, display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: '1rem'
};

const modalStyle: React.CSSProperties = {
    background: 'var(--bg-secondary)', 
    width: '100%', maxWidth: '500px',
    borderRadius: '16px', padding: '2rem',
    boxShadow: 'var(--shadow-lg)',
    animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
};

const closeBtnStyle: React.CSSProperties = {
    background: 'transparent', border: 'none', cursor: 'pointer',
    color: 'var(--text-muted)'
};

const labelStyle: React.CSSProperties = {
    display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)'
};

const inputStyle: React.CSSProperties = {
    width: '100%', padding: '0.75rem', borderRadius: '8px',
    border: '1px solid var(--bg-tertiary)', background: 'var(--bg-primary)',
    color: 'var(--text-primary)', fontSize: '0.95rem', outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'inherit'
};

const primaryBtnStyle: React.CSSProperties = {
    width: '100%', padding: '0.875rem', borderRadius: '8px',
    background: 'var(--primary)', color: 'white', border: 'none',
    fontSize: '1rem', fontWeight: 600, cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
    marginTop: '0.5rem',
    boxShadow: '0 4px 6px rgba(14, 165, 233, 0.2)'
};

const contactMethodStyle: React.CSSProperties = {
    display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 500
};
