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

    // Defined rows for comparison
    const rows = [
        { label: 'Manufacturer', key: 'make' },
        { label: 'Model', key: 'model' },
        { label: 'Price', key: 'askPrice', format: (v: number) => `$${v.toLocaleString()}` },
        { label: 'Year', key: 'yom' },
        { label: 'Total Time', key: 'aftt', format: (v: number) => `${v.toLocaleString()} Hours` },
        { label: 'Max Range', key: 'rangeNm', format: (v: number) => `${v.toLocaleString()} NM` },
        { label: 'Cruise Speed', key: 'cruiseSpeed', format: (v: number) => `${v} kts` },
        { label: 'Max Passengers', key: 'maxPax' },
        { label: 'Cabin Height', key: 'cabinHeight', format: (v: number) => `${v} ft` },
        { label: 'Cabin Width', key: 'cabinWidth', format: (v: number) => `${v} ft` },
        { label: 'Cabin Length', key: 'cabinLength', format: (v: number) => `${v} ft` },
        { label: 'Location', key: 'base' },
    ];

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)',
            zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '2rem'
        }}>
            <div style={{
                background: 'var(--bg-secondary)', width: '90%', maxWidth: '1200px',
                height: '80vh', borderRadius: '16px', display: 'flex', flexDirection: 'column',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', border: '1px solid var(--bg-tertiary)',
                overflow: 'hidden'
            }}>
                {/* Header */}
                <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--bg-tertiary)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Aircraft Comparison</h2>
                    <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                        <X size={24} />
                    </button>
                </div>

                {/* Content - Scrollable Horizontal */}
                <div style={{ flex: 1, overflow: 'auto', padding: '1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: `200px repeat(${selectedAircraft.length}, minmax(280px, 1fr))`, gap: '1rem' }}>
                        
                        {/* Labels Column */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                            <div style={{ height: '220px', display: 'flex', alignItems: 'flex-end', paddingBottom: '1rem', fontWeight: 700, fontSize: '1.1rem' }}>
                                Specifications
                            </div>
                            {rows.map((row) => (
                                <div key={row.label} style={{ 
                                    padding: '1rem', borderBottom: '1px solid var(--bg-tertiary)', 
                                    fontWeight: 600, color: 'var(--text-secondary)',
                                    display: 'flex', alignItems: 'center', height: '60px'
                                }}>
                                    {row.label}
                                </div>
                            ))}
                        </div>

                        {/* Aircraft Columns */}
                        {selectedAircraft.map(ac => (
                            <div key={ac.id} style={{ display: 'flex', flexDirection: 'column', gap: '0', background: 'var(--bg-primary)', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--bg-tertiary)' }}>
                                {/* Aircraft Header Card */}
                                <div style={{ height: '220px', position: 'relative', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ height: '140px', position: 'relative', width: '100%' }}>
                                        <Image 
                                            src={ac.thumbnailUrl} 
                                            alt={ac.model} 
                                            fill 
                                            style={{ objectFit: 'cover' }}
                                        />
                                        <button 
                                            onClick={() => onRemove(ac.id)}
                                            style={{ 
                                                position: 'absolute', top: '0.5rem', right: '0.5rem', 
                                                background: 'rgba(0,0,0,0.6)', color: 'white', border: 'none', 
                                                borderRadius: '50%', width: '32px', height: '32px', 
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                cursor: 'pointer' 
                                            }}
                                            title="Remove"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                    <div style={{ padding: '1rem', flex: 1, borderBottom: '1px solid var(--bg-tertiary)' }}>
                                        <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>{ac.model}</div>
                                        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{ac.yom} • {ac.make}</div>
                                    </div>
                                </div>

                                {/* Data Rows */}
                                {rows.map((row) => {
                                    const value = (ac as any)[row.key];
                                    return (
                                        <div key={row.key} style={{ 
                                            padding: '1rem', borderBottom: '1px solid var(--bg-tertiary)', 
                                            height: '60px', display: 'flex', alignItems: 'center',
                                            justifyContent: 'center', fontWeight: 500
                                        }}>
                                            {row.format ? row.format(value) : value}
                                        </div>
                                    );
                                })}
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}
