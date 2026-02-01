'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Airport, MAJOR_AIRPORTS } from '@/lib/airports';
import { MapPin, Search, X } from 'lucide-react';

interface Props {
    label: string;
    value: string; // The airport code
    onChange: (code: string) => void;
    placeholder?: string;
    className?: string;
}

export default function AirportAutocomplete({ label, value, onChange, placeholder, className }: Props) {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [suggestions, setSuggestions] = useState<Airport[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    // Sync query with initial value
    useEffect(() => {
        const selected = MAJOR_AIRPORTS.find(a => a.code === value);
        if (selected) {
            setQuery(`${selected.name} (${selected.code})`);
        } else {
            setQuery(value);
        }
    }, [value]);

    useEffect(() => {
        if (!query || query.length < 2 || !isOpen) {
            setSuggestions([]);
            return;
        }

        const filtered = MAJOR_AIRPORTS.filter(a => 
            a.name.toLowerCase().includes(query.toLowerCase()) || 
            a.code.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 10); // Show top 10 matches

        setSuggestions(filtered);
    }, [query, isOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (airport: Airport) => {
        setQuery(`${airport.name} (${airport.code})`);
        onChange(airport.code);
        setIsOpen(false);
    };

    const handleClear = () => {
        setQuery('');
        onChange('');
        setIsOpen(true);
    };

    return (
        <div ref={containerRef} style={{ position: 'relative', width: '100%' }} className={className}>
            <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>
                {label}
            </label>
            <div style={{ position: 'relative' }}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setIsOpen(true);
                    }}
                    onFocus={() => setIsOpen(true)}
                    placeholder={placeholder}
                    style={{ 
                        width: '100%', 
                        padding: '1rem', 
                        paddingLeft: '3rem',
                        paddingRight: '3rem',
                        borderRadius: '12px', 
                        border: '1px solid var(--bg-tertiary)', 
                        background: 'var(--bg-primary)', 
                        color: 'var(--text-primary)', 
                        fontWeight: 600, 
                        fontSize: '1.1rem',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                    onMouseLeave={(e) => {
                        if (document.activeElement !== e.currentTarget) {
                            e.currentTarget.style.borderColor = 'var(--bg-tertiary)';
                        }
                    }}
                />
                <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>
                    <Search size={18} />
                </div>
                {query && (
                    <button 
                        onClick={handleClear}
                        style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}
                    >
                        <X size={18} />
                    </button>
                )}
            </div>

            {isOpen && suggestions.length > 0 && (
                <div style={{ 
                    position: 'absolute', 
                    top: '100%', 
                    left: 0, 
                    right: 0, 
                    background: 'var(--bg-secondary)', 
                    borderRadius: '12px', 
                    marginTop: '8px', 
                    boxShadow: 'var(--shadow-lg)', 
                    border: '1px solid var(--bg-tertiary)',
                    zIndex: 1000,
                    maxHeight: '300px',
                    overflowY: 'auto'
                }}>
                    {suggestions.map((airport) => (
                        <div
                            key={airport.code}
                            onClick={() => handleSelect(airport)}
                            style={{ 
                                padding: '1rem', 
                                borderBottom: '1px solid var(--bg-tertiary)', 
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                transition: 'background 0.2s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-tertiary)'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                        >
                            <div style={{ color: 'var(--primary)' }}>
                                <MapPin size={18} />
                            </div>
                            <div>
                                <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{airport.name}</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>{airport.code}</div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
