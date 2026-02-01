"use client";

import React, { useMemo } from 'react';
import styles from './PriceFilter.module.css';

interface Props {
    data: any[];
    minPrice: number | null;
    maxPrice: number | null;
    onChange: (min: number | null, max: number | null) => void;
}

export default function PriceFilter({ data, minPrice, maxPrice, onChange }: Props) {
    // 1. Calculate Distribution & Global Bounds
    const { bins, maxCount, globalMin, globalMax } = useMemo(() => {
        const prices = data.map(d => d.askPrice).filter(p => !isNaN(p));
        if (prices.length === 0) return { bins: [], maxCount: 0, globalMin: 0, globalMax: 0 };

        const globalMin = Math.min(...prices);
        const globalMax = Math.max(...prices);
        const binCount = 24; // More granularity
        const binSize = (globalMax - globalMin) / binCount;

        const bins = new Array(binCount).fill(0).map((_, i) => {
            const rangeStart = globalMin + (i * binSize);
            const rangeEnd = rangeStart + binSize;
            
            const midPoint = rangeStart + (binSize / 2);
            // Default to global if null
            const currentMin = minPrice ?? globalMin;
            const currentMax = maxPrice ?? globalMax;
            
            // For histogram intersection logic
            const rangeMid = rangeStart + binSize/2;
            const isActive = rangeMid >= currentMin && rangeMid <= currentMax;
            
            const count = prices.filter(p => p >= rangeStart && p < rangeEnd).length;
            return { count, isActive };
        });

        const maxCount = Math.max(...bins.map(b => b.count));
        return { bins, maxCount, globalMin, globalMax };
    }, [data, minPrice, maxPrice]);

    const absoluteMin = globalMin;
    const absoluteMax = globalMax;
    const currentMin = minPrice ?? absoluteMin;
    const currentMax = maxPrice ?? absoluteMax;

    // Helpers
    const formatLabel = (val: number) => {
        if (val >= 1000000) return `$${(val / 1000000).toFixed(1)}M`;
        if (val >= 1000) return `$${(val / 1000).toFixed(0)}k`;
        return `$${val}`;
    };

    const handleMinTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value === '' ? null : Number(e.target.value);
        onChange(val, maxPrice);
    };

    const handleMaxTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value === '' ? null : Number(e.target.value);
        onChange(minPrice, val);
    };

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'min' | 'max') => {
        const val = Number(e.target.value);
        if (type === 'min') {
            const newMin = Math.min(val, currentMax - 100000); 
            onChange(newMin, maxPrice);
        } else {
            const newMax = Math.max(val, currentMin + 100000);
            onChange(minPrice, newMax);
        }
    };

    // Percentages
    const range = absoluteMax - absoluteMin;
    const minPercent = range === 0 ? 0 : ((currentMin - absoluteMin) / range) * 100;
    const maxPercent = range === 0 ? 100 : ((currentMax - absoluteMin) / range) * 100;

    return (
        <div style={{ paddingBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '1rem', fontSize: '1rem', fontWeight: 700 }}>
                Price
            </label>

            {/* Histogram + Slider Container */}
            <div style={{ position: 'relative', marginBottom: '2rem' }}>
                
                {/* Histogram Bars */}
                <div style={{ 
                    display: 'flex', 
                    alignItems: 'flex-end', 
                    justifyContent: 'space-between', 
                    height: '60px', 
                    gap: '1px',
                    padding: '0 10px', 
                    marginBottom: '-12px' 
                }}>
                    {bins.map((bin, i) => (
                        <div 
                            key={i}
                            style={{ 
                                flex: 1, 
                                background: bin.isActive ? '#1a7577' : '#cbd5e1', 
                                height: bin.count > 0 ? `${(bin.count / maxCount) * 100}%` : '0px',
                                borderRadius: '2px 2px 0 0',
                                transition: 'background 0.15s ease'
                            }}
                        />
                    ))}
                </div>

                {/* Slider Container */}
                <div style={{ position: 'relative', height: '24px' }}>
                    
                    {/* Gray Track */}
                    <div style={{ 
                        position: 'absolute', top: '50%', left: '0', right: '0', 
                        height: '4px', background: '#cbd5e1', borderRadius: '2px', transform: 'translateY(-50%)' 
                    }} />
                    
                    {/* Active Teal Track */}
                    <div style={{ 
                        position: 'absolute', top: '50%', 
                        left: `${minPercent}%`, 
                        right: `${100 - maxPercent}%`,
                        height: '4px', background: '#1a7577', borderRadius: '2px', transform: 'translateY(-50%)' 
                    }} />

                    {/* Left Range Input */}
                    <input 
                        type="range"
                        min={absoluteMin}
                        max={absoluteMax}
                        value={currentMin}
                        onChange={(e) => handleSliderChange(e, 'min')}
                        className={styles.thumbInput}
                        style={{ zIndex: currentMin > (absoluteMax - absoluteMin) / 2 ? 10 : 5 }}
                    />

                    {/* Right Range Input */}
                    <input 
                        type="range"
                        min={absoluteMin}
                        max={absoluteMax}
                        value={currentMax}
                        onChange={(e) => handleSliderChange(e, 'max')}
                        className={styles.thumbInput}
                        style={{ zIndex: 6 }}
                    />
                </div>

                 {/* Labels below slider */}
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#64748b', marginTop: '0.5rem', fontWeight: 500 }}>
                    <span>{formatLabel(absoluteMin)}</span>
                    <span>{formatLabel(absoluteMax)}+</span>
                </div>
            </div>

            {/* Price Inputs */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ position: 'relative', flex: 1 }}>
                     <input 
                        type="number" 
                        placeholder="Min"
                        value={minPrice || ''}
                        onChange={handleMinTextChange}
                        style={{ 
                            width: '100%', 
                            padding: '0.6rem 0.6rem 0.6rem 0.6rem', 
                            borderRadius: '4px', 
                            border: '1px solid #cbd5e1',
                            fontSize: '0.95rem',
                            color: '#334155'
                        }}
                     />
                     {!minPrice && <span style={{ position: 'absolute', right: '0.6rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', pointerEvents: 'none', fontSize: '0.85rem' }}>Min</span>}
                </div>
                <span style={{ color: '#64748b' }}>-</span>
                <div style={{ position: 'relative', flex: 1 }}>
                     <input 
                        type="number" 
                        placeholder="Max"
                        value={maxPrice || ''}
                        onChange={handleMaxTextChange}
                        style={{ 
                            width: '100%', 
                            padding: '0.6rem', 
                            borderRadius: '4px', 
                            border: '1px solid #cbd5e1',
                            fontSize: '0.95rem',
                            color: '#334155'
                        }}
                     />
                     {!maxPrice && <span style={{ position: 'absolute', right: '0.6rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', pointerEvents: 'none', fontSize: '0.85rem' }}>Max</span>}
                </div>
            </div>
        </div>
    );
}
