'use client';

import React, { useMemo, useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { MOCK_AIRCRAFT } from "@/lib/mockData";
import { MAJOR_AIRPORTS, Airport } from '@/lib/airports';
import { calculateDistanceNm } from '@/lib/distance';
import { MapPin, ArrowRight, Gauge, Users, Clock, ArrowLeft, Info, Plane, ShieldCheck, Zap } from 'lucide-react';
import AircraftCard from '@/components/AircraftCard';
import AirportAutocomplete from '@/components/AirportAutocomplete';
import { Aircraft } from '@/types';
import Link from 'next/link';

function MissionResultsContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    
    const originCode = searchParams.get('origin') || 'TEB';
    const destCode = searchParams.get('dest');
    
    const origin = useMemo(() => MAJOR_AIRPORTS.find(a => a.code === originCode) || MAJOR_AIRPORTS[0], [originCode]);
    const destination = useMemo(() => MAJOR_AIRPORTS.find(a => a.code === destCode), [destCode]);
    
    const [selectedOrigin, setSelectedOrigin] = useState(origin.code);
    const [selectedDest, setSelectedDest] = useState(destination?.code || '');
    const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
    const [sortBy, setSortBy] = useState<'time' | 'price' | 'range' | 'efficiency'>('time');
    const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

    const distance = useMemo(() => {
        if (!origin || !destination) return null;
        return calculateDistanceNm(origin.lat, origin.lng, destination.lat, destination.lng);
    }, [origin, destination]);

    const matchingAircraft = useMemo(() => {
        if (!distance) return [];
        
        const qualified = MOCK_AIRCRAFT.filter(ac => ac.rangeNm >= distance);
        
        // Sort based on selected criteria
        return qualified.sort((a, b) => {
            let comparison = 0;
            
            switch (sortBy) {
                case 'time':
                    const timeA = distance / (a.cruiseSpeed || 450);
                    const timeB = distance / (b.cruiseSpeed || 450);
                    comparison = timeA - timeB;
                    break;
                case 'price':
                    comparison = a.askPrice - b.askPrice;
                    break;
                case 'range':
                    comparison = a.rangeNm - b.rangeNm;
                    break;
                case 'efficiency':
                    const effA = distance / a.rangeNm;
                    const effB = distance / b.rangeNm;
                    comparison = effA - effB;
                    break;
            }
            
            return sortDir === 'asc' ? comparison : -comparison;
        });
    }, [distance, sortBy, sortDir]);

    const handleSort = (key: 'time' | 'price' | 'range' | 'efficiency') => {
        if (sortBy === key) {
            setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(key);
            setSortDir('asc');
        }
    };

    const handlePlan = () => {
        if (selectedOrigin && selectedDest) {
            router.push(`/mission?origin=${selectedOrigin}&dest=${selectedDest}`);
        }
    };

    if (!destination) {
        return (
            <div style={{ minHeight: 'calc(100vh - var(--header-height))', background: 'var(--bg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                <div style={{ maxWidth: '600px', width: '100%', background: 'var(--bg-secondary)', padding: '3rem', borderRadius: '32px', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--bg-tertiary)', textAlign: 'center' }}>
                    <div style={{ width: '64px', height: '64px', background: 'rgba(14, 165, 233, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', margin: '0 auto 1.5rem auto' }}>
                        <MapPin size={32} />
                    </div>
                    <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>Mission Planner</h1>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>Select your route to find aircraft from our global fleet capable of the mission.</p>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
                        <AirportAutocomplete 
                            label="Departure"
                            value={selectedOrigin}
                            onChange={setSelectedOrigin}
                            placeholder="Search departure airport..."
                        />
                        
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{ width: '2px', height: '24px', background: 'var(--bg-tertiary)' }} />
                        </div>

                        <AirportAutocomplete 
                            label="Destination"
                            value={selectedDest}
                            onChange={setSelectedDest}
                            placeholder="Search destination airport..."
                        />

                        <button 
                            onClick={handlePlan}
                            disabled={!selectedDest}
                            style={{ 
                                marginTop: '1rem', padding: '1.25rem', background: selectedDest ? 'var(--primary)' : 'var(--bg-tertiary)', color: 'white', 
                                border: 'none', borderRadius: '16px', fontWeight: 700, fontSize: '1.1rem', cursor: selectedDest ? 'pointer' : 'not-allowed',
                                boxShadow: selectedDest ? '0 10px 25px rgba(14, 165, 233, 0.4)' : 'none', transition: 'all 0.2s'
                            }}
                        >
                            Find Matching Aircraft
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div style={{ height: 'calc(100vh - var(--header-height))', overflowY: 'auto', background: 'var(--bg-primary)' }}>
            {/* Mission Hero */}
            <div style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--bg-tertiary)', padding: '3rem 1.5rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <Link href="/mission" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', fontSize: '0.9rem', fontWeight: 600 }}>
                        <ArrowLeft size={16} /> Edit Route
                    </Link>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1 }}>{origin.code}</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, marginTop: '4px' }}>{origin.name}</div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', flex: 1, minWidth: '100px' }}>
                                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase' }}>{distance?.toFixed(0)} NM</div>
                                    <div style={{ width: '100%', height: '2px', background: 'linear-gradient(to right, var(--primary), var(--secondary))', position: 'relative' }}>
                                        <Plane size={14} style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)', color: 'var(--secondary)' }} />
                                    </div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1 }}>{destination.code}</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, marginTop: '4px' }}>{destination.name}</div>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '2rem', padding: '1.5rem 2rem', background: 'var(--bg-primary)', borderRadius: '20px', border: '1px solid var(--bg-tertiary)' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ color: 'var(--text-muted)', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>Total Distance</div>
                                <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>{distance?.toFixed(0)} NM</div>
                            </div>
                            <div style={{ width: '1px', background: 'var(--bg-tertiary)' }} />
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ color: 'var(--text-muted)', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>Fleet Matches</div>
                                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)' }}>{matchingAircraft.length}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Results Section */}
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Qualified Aircraft</h2>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                            Sorted by {sortBy === 'time' ? 'Flight Time' : sortBy === 'price' ? 'Price' : sortBy === 'range' ? 'Range' : 'Efficiency'} ({sortDir === 'asc' ? 'Low to High' : 'High to Low'})
                        </div>
                    </div>
                    
                    {/* View Mode Toggle */}
                    <div style={{ display: 'flex', gap: '8px', background: 'var(--bg-secondary)', padding: '4px', borderRadius: '12px', border: '1px solid var(--bg-tertiary)' }}>
                        <button
                            onClick={() => setViewMode('grid')}
                            style={{
                                padding: '0.5rem 1rem',
                                background: viewMode === 'grid' ? 'var(--primary)' : 'transparent',
                                color: viewMode === 'grid' ? 'white' : 'var(--text-primary)',
                                border: 'none',
                                borderRadius: '8px',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                        >
                            Grid View
                        </button>
                        <button
                            onClick={() => setViewMode('table')}
                            style={{
                                padding: '0.5rem 1rem',
                                background: viewMode === 'table' ? 'var(--primary)' : 'transparent',
                                color: viewMode === 'table' ? 'white' : 'var(--text-primary)',
                                border: 'none',
                                borderRadius: '8px',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                        >
                            Table View
                        </button>
                    </div>
                </div>


                {matchingAircraft.length > 0 ? (
                    viewMode === 'grid' ? (
                        // Grid View
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '2rem' }}>
                            {matchingAircraft.map(ac => {
                                const flightTime = distance ? distance / (ac.cruiseSpeed || 450) : 0;
                                const hours = Math.floor(flightTime);
                                const minutes = Math.round((flightTime % 1) * 60);
                                
                                return (
                                    <div 
                                        key={ac.id} 
                                        style={{ position: 'relative', cursor: 'pointer' }}
                                        onClick={() => router.push(`/inventory/${ac.id}`)}
                                    >
                                        <AircraftCard 
                                            data={ac} 
                                            route={{ distance: distance || 0, originCode: origin.code, destCode: destination.code }}
                                        />
                                        {/* Overlay Mission Metrics */}
                                        <div style={{ 
                                            marginTop: '1rem', 
                                            background: 'var(--bg-secondary)', 
                                            borderRadius: '16px', 
                                            padding: '1.5rem', 
                                            border: '1px solid var(--bg-tertiary)',
                                            display: 'grid',
                                            gridTemplateColumns: '1fr 1fr',
                                            gap: '1rem'
                                        }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                <div style={{ width: '32px', height: '32px', background: 'rgba(14, 165, 233, 0.1)', color: 'var(--primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Users size={16} />
                                                </div>
                                                <div>
                                                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Capacity</div>
                                                    <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>{ac.specs?.interior.typicalPAX || ac.maxPax} PAX</div>
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                <div style={{ width: '32px', height: '32px', background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <ShieldCheck size={16} />
                                                </div>
                                                <div>
                                                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Safety</div>
                                                    <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>{((ac.rangeNm - (distance || 0))).toLocaleString()} NM Res.</div>
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                <div style={{ width: '32px', height: '32px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Gauge size={16} />
                                                </div>
                                                <div>
                                                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Efficiency</div>
                                                    <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>{(distance || 0) / ac.rangeNm * 100 < 50 ? 'Optimum' : 'High'}</div>
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                <div style={{ width: '32px', height: '32px', background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Plane size={16} />
                                                </div>
                                                <div>
                                                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Fly Time</div>
                                                    <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>{hours}h {minutes}m</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        // Table View
                        <div style={{ overflowX: 'auto', background: 'var(--bg-secondary)', borderRadius: '16px', border: '1px solid var(--bg-tertiary)' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ borderBottom: '2px solid var(--bg-tertiary)' }}>
                                        <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Aircraft</th>
                                        <th 
                                            onClick={() => handleSort('time')}
                                            style={{ padding: '1rem', textAlign: 'left', fontWeight: 700, fontSize: '0.85rem', color: sortBy === 'time' ? 'var(--primary)' : 'var(--text-muted)', textTransform: 'uppercase', cursor: 'pointer', userSelect: 'none' }}
                                        >
                                            Flight Time {sortBy === 'time' && (sortDir === 'asc' ? '↑' : '↓')}
                                        </th>
                                        <th 
                                            onClick={() => handleSort('price')}
                                            style={{ padding: '1rem', textAlign: 'left', fontWeight: 700, fontSize: '0.85rem', color: sortBy === 'price' ? 'var(--primary)' : 'var(--text-muted)', textTransform: 'uppercase', cursor: 'pointer', userSelect: 'none' }}
                                        >
                                            Price {sortBy === 'price' && (sortDir === 'asc' ? '↑' : '↓')}
                                        </th>
                                        <th 
                                            onClick={() => handleSort('range')}
                                            style={{ padding: '1rem', textAlign: 'left', fontWeight: 700, fontSize: '0.85rem', color: sortBy === 'range' ? 'var(--primary)' : 'var(--text-muted)', textTransform: 'uppercase', cursor: 'pointer', userSelect: 'none' }}
                                        >
                                            Range {sortBy === 'range' && (sortDir === 'asc' ? '↑' : '↓')}
                                        </th>
                                        <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Capacity</th>
                                        <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Reserve</th>
                                        <th style={{ padding: '1rem', textAlign: 'center', fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {matchingAircraft.map((ac, idx) => {
                                        const flightTime = distance ? distance / (ac.cruiseSpeed || 450) : 0;
                                        const hours = Math.floor(flightTime);
                                        const minutes = Math.round((flightTime % 1) * 60);
                                        
                                        return (
                                            <tr 
                                                key={ac.id}
                                                style={{ 
                                                    borderBottom: '1px solid var(--bg-tertiary)',
                                                    cursor: 'pointer',
                                                    transition: 'background 0.2s'
                                                }}
                                                onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-tertiary)'}
                                                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                                onClick={() => router.push(`/inventory/${ac.id}`)}
                                            >
                                                <td style={{ padding: '1rem' }}>
                                                    <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{ac.yom} {ac.make} {ac.model}</div>
                                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>SN: {ac.sn}</div>
                                                </td>
                                                <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--primary)' }}>
                                                    {hours}h {minutes}m
                                                </td>
                                                <td style={{ padding: '1rem', fontWeight: 700 }}>
                                                    ${(ac.askPrice / 1000000).toFixed(2)}M
                                                </td>
                                                <td style={{ padding: '1rem' }}>
                                                    {ac.rangeNm.toLocaleString()} NM
                                                </td>
                                                <td style={{ padding: '1rem' }}>
                                                    {ac.specs?.interior.typicalPAX || ac.maxPax} PAX
                                                </td>
                                                <td style={{ padding: '1rem', color: '#10b981', fontWeight: 600 }}>
                                                    {((ac.rangeNm - (distance || 0))).toLocaleString()} NM
                                                </td>
                                                <td style={{ padding: '1rem', textAlign: 'center' }}>
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            router.push(`/inventory/${ac.id}`);
                                                        }}
                                                        style={{
                                                            padding: '0.5rem 1rem',
                                                            background: 'var(--primary)',
                                                            color: 'white',
                                                            border: 'none',
                                                            borderRadius: '8px',
                                                            fontWeight: 600,
                                                            cursor: 'pointer',
                                                            fontSize: '0.85rem'
                                                        }}
                                                    >
                                                        View Details
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )
                ) : (
                    <div style={{ textAlign: 'center', padding: '5rem 2rem', border: '2px dashed var(--bg-tertiary)', borderRadius: '24px' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚠️</div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>No Matches Found</h3>
                        <p style={{ color: 'var(--text-muted)' }}>This mission exceeds the range of our current global fleet.</p>
                        <button onClick={() => router.push('/mission')} style={{ marginTop: '1.5rem', padding: '0.75rem 1.5rem', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>
                            Try a Different Route
                        </button>
                    </div>
                )}
            </div>
            
            {/* Mission Value Props */}
            <div style={{ background: 'var(--bg-secondary)', padding: '4rem 1.5rem', borderTop: '1px solid var(--bg-tertiary)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                         <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(14, 165, 233, 0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <Zap size={24} />
                         </div>
                         <div>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>Performance Optimized</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>We analyze cruise speeds and fuel burn to provide the most efficient matches for this exact route.</p>
                         </div>
                    </div>
                     <div style={{ display: 'flex', gap: '1.5rem' }}>
                         <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <ShieldCheck size={24} />
                         </div>
                         <div>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>Safety Margin</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>All matches include calculations for standard fuel reserves and alternates, ensuring mission safety.</p>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function MissionResultsPage() {
    return (
        <Suspense fallback={<div>Loading Mission...</div>}>
            <MissionResultsContent />
        </Suspense>
    );
}
