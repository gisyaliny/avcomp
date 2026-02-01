import React from 'react';
import { Plane, Fan, Rocket, Component, Anchor, Zap } from 'lucide-react';

interface Props {
    selectedTypes: string[];
    onChange: (types: string[]) => void;
}

const CATEGORIES = [
    { id: 'Jet', label: 'Jet Aircraft', icon: Plane },
    { id: 'Turboprop', label: 'Turboprop', icon: Fan },
    { id: 'Piston', label: 'Piston Single', icon: Component }, // Approximation
    { id: 'Piston Twin', label: 'Piston Twin', icon: Component },
    { id: 'Helicopter', label: 'Helicopter', icon: Fan }, // Approximation
    { id: 'Amphibious', label: 'Amphibious', icon: Anchor },
    { id: 'Experimental', label: 'Experimental', icon: Rocket },
    { id: 'Electric', label: 'Electric', icon: Zap },
];

export default function TypeFilter({ selectedTypes, onChange }: Props) {
    const toggleType = (id: string) => {
        if (selectedTypes.includes(id)) {
            onChange(selectedTypes.filter(t => t !== id));
        } else {
            onChange([...selectedTypes, id]);
        }
    };

    return (
        <div>
            <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.875rem', fontWeight: 600 }}>
                Categories
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
                {CATEGORIES.map(cat => {
                    const isSelected = selectedTypes.includes(cat.id);
                    const Icon = cat.icon;
                    return (
                        <button
                            key={cat.id}
                            onClick={() => toggleType(cat.id)}
                            style={{ 
                                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                                gap: '0.5rem',
                                padding: '0.75rem 0.25rem',
                                background: isSelected ? 'rgba(59, 130, 246, 0.08)' : 'var(--bg-primary)',
                                border: isSelected ? '2px solid var(--primary)' : '1px solid var(--bg-tertiary)',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                minHeight: '80px'
                            }}
                        >
                            <Icon size={20} className={isSelected ? 'text-primary' : 'text-muted'} color={isSelected ? 'var(--primary)' : 'var(--text-muted)'} />
                            <span style={{ fontSize: '0.7rem', fontWeight: 600, color: isSelected ? 'var(--primary)' : 'var(--text-secondary)', textAlign: 'center', lineHeight: 1.2 }}>
                                {cat.label}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
