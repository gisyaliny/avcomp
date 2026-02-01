import React from 'react';

interface Props {
    minYear: number | null;
    maxYear: number | null;
    onChange: (min: number | null, max: number | null) => void;
}

export default function YearFilter({ minYear, maxYear, onChange }: Props) {
    const currentYear = new Date().getFullYear();
    const START_YEAR = 1980; // Reasonable floor for this mock data

    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value ? parseInt(e.target.value) : null;
        onChange(val, maxYear);
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value ? parseInt(e.target.value) : null;
        onChange(minYear, val);
    };

    return (
        <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>
                Year of Manufacture
            </label>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <div style={{ position: 'relative', flex: 1 }}>
                     <input 
                        type="number" 
                        placeholder={START_YEAR.toString()}
                        min={1950}
                        max={currentYear}
                        value={minYear || ''}
                        onChange={handleMinChange}
                        style={{ 
                            width: '100%', 
                            padding: '0.5rem', 
                            borderRadius: '6px', 
                            border: '1px solid var(--bg-tertiary)',
                            fontSize: '0.9rem'
                        }}
                     />
                </div>
                <span style={{ color: 'var(--text-muted)' }}>-</span>
                <div style={{ position: 'relative', flex: 1 }}>
                     <input 
                        type="number" 
                        placeholder={currentYear.toString()}
                        min={1950}
                        max={currentYear}
                        value={maxYear || ''}
                        onChange={handleMaxChange}
                        style={{ 
                            width: '100%', 
                            padding: '0.5rem', 
                            borderRadius: '6px', 
                            border: '1px solid var(--bg-tertiary)',
                            fontSize: '0.9rem'
                        }}
                     />
                </div>
            </div>
        </div>
    );
}
