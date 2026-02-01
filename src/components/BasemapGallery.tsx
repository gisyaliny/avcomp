import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronsRight } from 'lucide-react';

interface BasemapGalleryProps {
    currentStyle: 'light' | 'dark' | 'satellite';
    onChange: (style: 'light' | 'dark' | 'satellite') => void;
}

const Basemaps = [
    { id: 'light', name: 'Streets', image: '/basemap-streets.svg' },
    { id: 'dark', name: 'Dark Mode', image: '/basemap-dark.svg' },
    { id: 'satellite', name: 'Satellite', image: '/basemap-satellite.svg' },
] as const;

export default function BasemapGallery({ currentStyle, onChange }: BasemapGalleryProps) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Close on click outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
             document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const activeBasemap = Basemaps.find(b => b.id === currentStyle) || Basemaps[0];

    return (
        <div ref={containerRef} style={{ position: 'relative', pointerEvents: 'auto' }}>
            {/* Trigger Button - Square with Thumbnail */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    background: 'var(--bg-secondary)',
                    borderRadius: '8px',
                    border: '1px solid var(--bg-tertiary)',
                    boxShadow: 'var(--shadow-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '48px', 
                    height: '48px',
                    padding: '4px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    position: 'relative',
                    overflow: 'hidden'
                }}
                title="Change Basemap"
            >
                <div style={{ width: '100%', height: '100%', borderRadius: '4px', overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="fa-solid fa-layer-group" style={{ fontSize: '1.25rem', color: isOpen ? 'var(--primary)' : 'var(--text-secondary)' }}></i>
                </div>
                {/* Active Indicator Ring */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '8px',
                    border: '2px solid transparent',
                    transition: 'border-color 0.2s',
                    pointerEvents: 'none',
                    borderColor: isOpen ? 'var(--primary)' : 'transparent'
                }} />
            </button>

            {/* Expanded Gallery Panel */}
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '0',
                    left: 'calc(100% + 12px)',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--bg-tertiary)',
                    borderRadius: '8px',
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                    padding: '16px', // More padding
                    zIndex: 10000, 
                    width: '320px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    animation: 'fadeIn 0.2s ease-out'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                         <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>Select Basemap</span>
                         <button 
                            onClick={() => setIsOpen(false)} 
                            style={{ 
                                background: 'var(--bg-primary)', 
                                border: '1px solid var(--bg-tertiary)', 
                                borderRadius: '4px',
                                width: '28px', height: '28px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: 'pointer',
                                color: 'var(--text-secondary)' 
                            }}
                            title="Close"
                        >
                             <ChevronsRight size={16} />
                         </button>
                    </div>

                    <div style={{
                         display: 'grid',
                         gridTemplateColumns: 'repeat(3, 1fr)',
                         gap: '12px'
                    }}>
                        {Basemaps.map((bm) => (
                            <div 
                                key={bm.id}
                                onClick={() => {
                                    onChange(bm.id as 'light' | 'dark' | 'satellite');
                                    setIsOpen(false);
                                }}
                                style={{
                                    cursor: 'pointer',
                                    borderRadius: '6px',
                                    overflow: 'hidden',
                                    border: currentStyle === bm.id ? '2px solid var(--primary)' : '1px solid var(--bg-tertiary)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'all 0.2s',
                                    background: 'var(--bg-primary)',
                                    position: 'relative',
                                    boxShadow: currentStyle === bm.id ? '0 0 0 2px rgba(14, 165, 233, 0.2)' : 'none'
                                }}
                            >
                                <div style={{ height: '64px', position: 'relative' }}>
                                    <Image src={bm.image} alt={bm.name} fill style={{ objectFit: 'cover' }} />
                                    {/* Selected Overlay */}
                                    {currentStyle === bm.id && (
                                        <div style={{
                                            position: 'absolute', inset: 0, 
                                            background: 'var(--primary)',
                                            opacity: 0.15
                                        }} />
                                    )}
                                </div>
                                <div style={{
                                    padding: '8px 4px',
                                    fontSize: '0.75rem',
                                    fontWeight: currentStyle === bm.id ? 600 : 500,
                                    textAlign: 'center',
                                    color: currentStyle === bm.id ? 'var(--primary)' : 'var(--text-primary)',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                }}>
                                    {bm.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateX(-10px); }
                    to { opacity: 1; transform: translateX(0); }
                }
            `}</style>
        </div>
    );
}
