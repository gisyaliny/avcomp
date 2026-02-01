'use client';

import React, { useMemo, useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { MOCK_AIRCRAFT } from "@/lib/mockData";
import { MAJOR_AIRPORTS, Airport } from '@/lib/airports';
import { calculateDistanceNm } from '@/lib/distance';
import { MapPin, ArrowRight, Gauge, Users, Clock, ArrowLeft, Info, Plane, ShieldCheck, Zap } from 'lucide-react';
import AircraftCard from '@/components/AircraftCard';
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

    const distance = useMemo(() => {
        if (!origin || !destination) return null;
        return calculateDistanceNm(origin.lat, origin.lng, destination.lat, destination.lng);
    }, [origin, destination]);

    const matchingAircraft = useMemo(() => {
        if (!distance) return [];
        return MOCK_AIRCRAFT.filter(ac => ac.rangeNm >= distance)
            .sort((a, b) => a.rangeNm - b.rangeNm);
    }, [distance]);

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
                        <div>
                            <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>Departure</label>
                            <select 
                                value={selectedOrigin} 
                                onChange={(e) => setSelectedOrigin(e.target.value)}
                                style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--bg-tertiary)', background: 'var(--bg-primary)', color: 'var(--text-primary)', fontWeight: 600, fontSize: '1.1rem' }}
                            >
                                {MAJOR_AIRPORTS.map(a => <option key={a.code} value={a.code}>{a.name} ({a.code})</option>)}
                            </select>
                        </div>
                        
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{ width: '2px', height: '24px', background: 'var(--bg-tertiary)' }} />
                        </div>

                        <div>
                            <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>Destination</label>
                            <select 
                                value={selectedDest} 
                                onChange={(e) => setSelectedDest(e.target.value)}
                                style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--bg-tertiary)', background: 'var(--bg-primary)', color: 'var(--text-primary)', fontWeight: 600, fontSize: '1.1rem' }}
                            >
                                <option value="">Where to?</option>
                                {MAJOR_AIRPORTS.filter(a => a.code !== selectedOrigin).map(a => <option key={a.code} value={a.code}>{a.name} ({a.code})</option>)}
                            </select>
                        </div>

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

            {/* Results Grid */}
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Qualified Aircraft</h2>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Showing all aircraft capable of {distance?.toFixed(0)} NM range</div>
                </div>

                {matchingAircraft.length > 0 ? (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '2rem' }}>
                        {matchingAircraft.map(ac => (
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
                                            <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>{Math.floor((distance || 0) / (ac.cruiseSpeed || 450))}h {Math.round(((distance || 0) / (ac.cruiseSpeed || 450) % 1) * 60)}m</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
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
