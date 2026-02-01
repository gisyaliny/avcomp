import React from 'react';
import { Aircraft } from '@/types';
import { X, Trash2 } from 'lucide-react';
import Image from 'next/image';

interface Props {
    selectedAircraft: Aircraft[];
    onClose: () => void;
    onRemove: (id: string) => void;
}

export default function ComparisonModal({ selectedAircraft, onClose, onRemove }: Props) {
    if (selectedAircraft.length === 0) return null;

    // Defined rows for comparison with preference indicators
    const rows = [
        { label: 'Manufacturer', key: 'make' },
        { label: 'Model', key: 'model' },
        { label: 'Price', key: 'askPrice', format: (v: number) => `$${v.toLocaleString()}`, preference: 'low' },
        { label: 'Year', key: 'yom', preference: 'high' },
        { label: 'Total Time', key: 'aftt', format: (v: number) => `${v.toLocaleString()} hrs`, preference: 'low' },
        { label: 'Max Range', key: 'rangeNm', format: (v: number) => `${v.toLocaleString()} NM`, preference: 'high' },
        { label: 'Cruise Speed', key: 'cruiseSpeed', format: (v: number) => `${v} kts`, preference: 'high' },
        { label: 'Max Passengers', key: 'maxPax', preference: 'high' },
        { label: 'Cabin Height', key: 'cabinHeight', format: (v: number) => `${v} ft`, preference: 'high' },
        { label: 'Cabin Width', key: 'cabinWidth', format: (v: number) => `${v} ft`, preference: 'high' },
        { label: 'Cabin Length', key: 'cabinLength', format: (v: number) => `${v} ft`, preference: 'high' },
        { label: 'Location', key: 'base' },
    ];

    // Helper to get highlighting for a cell
    const getHighlight = (row: any, value: any) => {
        if (!row.preference || typeof value !== 'number' || selectedAircraft.length < 2) return null;

        const values = selectedAircraft.map(ac => (ac as any)[row.key]).filter(v => typeof v === 'number');
        if (values.length < 2) return null;

        const min = Math.min(...values);
        const max = Math.max(...values);
        
        // If all values are the same, no highlight
        if (min === max) return null;

        if (row.preference === 'high') {
            if (value === max) return 'best';
            if (value === min) return 'worst';
        } else {
            if (value === min) return 'best';
            if (value === max) return 'worst';
        }
        return null;
    };

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)',
            zIndex: 10005, display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '2rem'
        }}>
            <div style={{
                background: 'var(--bg-secondary)', width: '90%', maxWidth: '1400px',
                height: '85vh', borderRadius: '24px', display: 'flex', flexDirection: 'column',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', border: '1px solid var(--bg-tertiary)',
                overflow: 'hidden', animation: 'modalFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}>
                {/* Header */}
                <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid var(--bg-tertiary)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-primary)' }}>
                    <div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-outfit)' }}>Comparison Analysis</h2>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Comparing {selectedAircraft.length} aircraft models</p>
                    </div>
                    <button onClick={onClose} style={{ background: 'var(--bg-tertiary)', border: 'none', cursor: 'pointer', padding: '0.6rem', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', transition: 'all 0.2s' }}>
                        <X size={20} />
                    </button>
                </div>

                {/* Content - Scrollable Horizontal */}
                <div style={{ flex: 1, overflow: 'auto', padding: '2rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: `220px repeat(${selectedAircraft.length}, minmax(280px, 1fr))`, gap: '1.5rem', minWidth: 'fit-content' }}>
                        
                        {/* Labels Column */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                            <div style={{ height: '240px', display: 'flex', alignItems: 'flex-end', paddingBottom: '1.5rem', fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                                Metric
                            </div>
                            {rows.map((row) => (
                                <div key={row.label} style={{ 
                                    padding: '1rem 0', borderBottom: '1px solid var(--bg-tertiary)', 
                                    fontWeight: 700, color: 'var(--text-muted)',
                                    display: 'flex', alignItems: 'center', height: '65px',
                                    fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em'
                                }}>
                                    {row.label}
                                </div>
                            ))}
                        </div>

                        {/* Aircraft Columns */}
                        {selectedAircraft.map(ac => (
                            <div key={ac.id} style={{ display: 'flex', flexDirection: 'column', gap: '0', background: 'var(--bg-primary)', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--bg-tertiary)', boxShadow: 'var(--shadow-sm)' }}>
                                {/* Aircraft Header Card */}
                                <div style={{ height: '240px', position: 'relative', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ height: '160px', position: 'relative', width: '100%', overflow: 'hidden' }}>
                                        <Image 
                                            src={ac.thumbnailUrl} 
                                            alt={ac.model} 
                                            fill 
                                            style={{ objectFit: 'cover' }}
                                        />
                                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }} />
                                        <button 
                                            onClick={() => onRemove(ac.id)}
                                            style={{ 
                                                position: 'absolute', top: '0.75rem', right: '0.75rem', 
                                                background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', 
                                                borderRadius: '10px', width: '36px', height: '36px', 
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                cursor: 'pointer', transition: 'all 0.2s'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.background = 'var(--danger)'}
                                            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                                            title="Remove"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                        <div style={{ position: 'absolute', bottom: '1rem', left: '1.25rem' }}>
                                            <div style={{ color: 'white', fontSize: '1.25rem', fontWeight: 800, textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>{ac.model}</div>
                                            <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', fontWeight: 500 }}>{ac.make}</div>
                                        </div>
                                    </div>
                                    <div style={{ padding: '1.25rem', flex: 1, borderBottom: '1px solid var(--bg-tertiary)', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '-0.03em' }}>
                                            ${(ac.askPrice / 1000000).toFixed(1)}M
                                        </div>
                                    </div>
                                </div>

                                {/* Data Rows */}
                                {rows.map((row) => {
                                    const value = (ac as any)[row.key];
                                    const highlight = getHighlight(row, value);
                                    
                                    return (
                                        <div key={row.key} style={{ 
                                            padding: '1rem', borderBottom: '1px solid var(--bg-tertiary)', 
                                            height: '65px', display: 'flex', alignItems: 'center',
                                            justifyContent: 'center', fontWeight: 600,
                                            background: highlight === 'best' ? 'rgba(16, 185, 129, 0.08)' : highlight === 'worst' ? 'rgba(244, 63, 94, 0.08)' : 'transparent',
                                            color: highlight === 'best' ? '#059669' : highlight === 'worst' ? '#E11D48' : 'var(--text-primary)',
                                            transition: 'all 0.2s', position: 'relative'
                                        }}>
                                            <span style={{ fontSize: '1rem' }}>
                                                {row.format ? row.format(value) : value}
                                            </span>
                                            {highlight === 'best' && (
                                                <div style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', width: '8px', height: '8px', borderRadius: '50%', background: '#059669', boxShadow: '0 0 10px rgba(16, 185, 129, 0.5)' }} />
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>

                <style jsx>{`
                    @keyframes modalFadeIn {
                        from { opacity: 0; transform: scale(0.95); }
                        to { opacity: 1; transform: scale(1); }
                    }
                `}</style>
            </div>
        </div>
    );
}
