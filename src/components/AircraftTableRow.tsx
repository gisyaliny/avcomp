import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import tableStyles from './AircraftTable.module.css';
import { Aircraft } from '@/types';
import { Heart } from 'lucide-react';
import { useAuth } from './AuthContext';

interface Props {
    aircraft: Aircraft;
    selected: boolean;
    onSelect: (id: string) => void;
    isCompared: boolean;
    onCompare: (id: string) => void;

    sortKey?: string;
    isTable?: boolean;
    route?: {
        distance: number;
        originCode: string;
        destCode: string;
    }
}

const AircraftTableRow = ({ aircraft, selected, onSelect, isCompared, onCompare, sortKey, isTable = false, route }: Props) => {
    const { user, toggleFavorite } = useAuth();
    const isFavorite = user?.favorites.includes(aircraft.id);

    const cruiseSpeed = aircraft.specs?.performance?.maxCruiseSpeed || 450;
    const flyTimeHours = route ? route.distance / cruiseSpeed : 0;
    const hours = Math.floor(flyTimeHours);
    const minutes = Math.round((flyTimeHours - hours) * 60);

    const handleFavoriteClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!user) {
            alert("Please log in to save favorites.");
            return;
        }
        toggleFavorite(aircraft.id);
    };

    if (isTable) {
        return (
            <tr 
                className={`${tableStyles.tr} ${selected ? tableStyles.selected : ''}`}
                onClick={() => onSelect(aircraft.id)}
                style={{ cursor: 'pointer' }}
            >
                {/* Photo */}
                <td className={tableStyles.td} style={{ padding: '0.75rem' }}>
                    <div style={{ width: '80px', height: '54px', borderRadius: '4px', overflow: 'hidden', background: '#eee', position: 'relative' }}>
                        <Image 
                            src={aircraft.thumbnailUrl} 
                            alt={aircraft.model} 
                            fill
                            sizes="120px"
                            style={{ objectFit: 'cover' }} 
                        />
                        {/* Tiny Favorite Button Overlay */}
                         <button 
                            onClick={handleFavoriteClick}
                            style={{
                                position: 'absolute',
                                top: '4px',
                                right: '4px',
                                background: 'rgba(255, 255, 255, 0.4)',
                                backdropFilter: 'blur(2px)',
                                border: 'none',
                                borderRadius: '50%',
                                width: '20px',
                                height: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                padding: 0,
                                zIndex: 10
                            }}
                         >
                             <Heart 
                                size={10} 
                                className={isFavorite ? tableStyles.heartFilled : ''} 
                                fill={isFavorite ? '#ef4444' : 'transparent'}
                                color={isFavorite ? '#ef4444' : 'white'}
                             />
                         </button>
                    </div>
                </td>

                {/* Aircraft */}
                <td className={`${tableStyles.td} ${sortKey === 'make' ? tableStyles.sorted : ''}`}>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--primary)' }}>
                        {aircraft.yom} {aircraft.make} {aircraft.model}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem', fontFamily: 'monospace' }}>
                        SN: {aircraft.sn}
                    </div>
                </td>

                {/* Price */}
                <td className={`${tableStyles.td} ${tableStyles.bold} ${sortKey === 'askPrice' ? tableStyles.sorted : ''}`}>
                    <span style={{ color: 'inherit' }}>
                        ${(aircraft.askPrice / 1000000).toFixed(2)}M
                    </span>
                </td>

                {/* Endurance / Fly Time */}
                <td className={tableStyles.td}>
                    {route ? (
                        <div style={{ color: 'var(--primary)', fontWeight: 700 }}>
                            {hours > 0 ? `${hours}h ` : ''}{minutes}m
                        </div>
                    ) : (
                        aircraft.specs?.performance.typicalEndurance || 'TBD'
                    )}
                </td>

                {/* Passengers */}
                <td className={tableStyles.td}>
                    {aircraft.specs?.interior.typicalPAX || aircraft.maxPax} Pax
                </td>

                {/* Range */}
                <td className={`${tableStyles.td} ${tableStyles.bold} ${sortKey === 'rangeNm' ? tableStyles.sorted : ''}`}>
                    <span style={{ color: 'inherit' }}>
                        {aircraft.rangeNm.toLocaleString()} NM
                    </span>
                </td>

                {/* Actions */}
                <td className={tableStyles.td} style={{ textAlign: 'right' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-end' }}>
                         <button 
                            onClick={(e) => { e.stopPropagation(); onCompare(aircraft.id); }}
                            className={tableStyles.actionBtn}
                            style={{ 
                                width: '100%',
                                background: isCompared ? 'var(--primary)' : undefined, 
                                color: isCompared ? 'white' : undefined 
                            }}
                         >
                            {isCompared ? 'Added' : '+ Compare'}
                         </button>
                         <Link href={`/inventory/${aircraft.id}`} style={{ width: '100%', textDecoration: 'none' }} onClick={(e) => e.stopPropagation()}>
                            <button className={tableStyles.actionBtn} style={{ width: '100%', background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--bg-tertiary)' }}>
                                Details &rarr;
                            </button>
                         </Link>
                    </div>
                </td>
            </tr>
        );
    }

    return (
        <div 
            onClick={() => onSelect(aircraft.id)}
            style={{ 
                display: 'grid', 
                gridTemplateColumns: '120px 1.5fr 120px 1fr 1fr 120px 140px', 
                gap: '1.5rem', 
                padding: '1rem', 
                borderBottom: '1px solid var(--bg-tertiary)',
                background: selected ? 'var(--bg-secondary)' : 'transparent',
                cursor: 'pointer',
                alignItems: 'center',
                transition: 'background 0.2s ease-in-out'
            }}
            // Standard CSS class for hover effects if not inline
            className="table-row-hover"
        >
                {/* Thumb */}
                <div style={{ width: '120px', height: '80px', borderRadius: '4px', overflow: 'hidden', background: '#eee', position: 'relative' }}>
                    <Image 
                        src={aircraft.thumbnailUrl} 
                        alt={aircraft.model} 
                        fill
                        sizes="100px"
                        style={{ objectFit: 'cover' }} 
                    />
                </div>
                
                {/* Aircraft Info */}
                <div style={{ color: sortKey === 'make' ? 'var(--primary)' : 'inherit' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: sortKey === 'make' ? 'var(--primary)' : 'var(--primary)' }}>{aircraft.yom} {aircraft.make} {aircraft.model}</div>
                     <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem', fontFamily: 'monospace' }}>SN: {aircraft.sn}</div>
                </div>

                {/* Price */}
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: sortKey === 'askPrice' ? 'var(--primary)' : 'var(--text-primary)' }}>
                    ${(aircraft.askPrice / 1000000).toFixed(2)}M
                </div>

                {/* Endurance / Fly Time */}
                 <div style={{ fontSize: '0.85rem', color: route ? 'var(--primary)' : 'var(--text-primary)', fontWeight: route ? 700 : 400 }}>
                    {route ? (
                        `${hours > 0 ? `${hours}h ` : ''}${minutes}m`
                    ) : (
                        aircraft.specs?.performance.typicalEndurance || 'TBD'
                    )}
                </div>

                {/* Passengers */}
                <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                    {aircraft.specs?.interior.typicalPAX || aircraft.maxPax} Pax
                </div>

                {/* Range */}
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: sortKey === 'rangeNm' ? 'var(--primary)' : 'inherit' }}>
                    {aircraft.rangeNm.toLocaleString()} NM
                </div>

                {/* Price/Action */}
                {/* Actions */}
                <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-end', justifyContent: 'center' }}>
                     <button 
                        onClick={(e) => { e.stopPropagation(); onCompare(aircraft.id); }}
                        style={{ 
                            fontSize: '0.8rem', 
                            border: '1px solid var(--primary)', 
                            padding: '6px 12px', 
                            borderRadius: '4px',
                            background: isCompared ? 'var(--primary)' : 'transparent',
                            color: isCompared ? 'white' : 'var(--primary)',
                            cursor: 'pointer',
                            fontWeight: 600,
                            width: '100%',
                            textAlign: 'center'
                        }}
                     >
                        {isCompared ? 'Added' : '+ Compare'}
                     </button>
                     <Link href={`/inventory/${aircraft.id}`} style={{ width: '100%', textDecoration: 'none' }} onClick={(e) => e.stopPropagation()}>
                        <button style={{ 
                            fontSize: '0.8rem', 
                            color: 'var(--text-primary)', 
                            fontWeight: 600, 
                            border: '1px solid var(--bg-tertiary)',
                            background: 'var(--bg-primary)',
                            padding: '6px 12px',
                            borderRadius: '4px',
                            width: '100%',
                            cursor: 'pointer',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px'
                        }}>
                            Details &rarr;
                        </button>
                     </Link>
                </div>
        </div>
    );
};

export default React.memo(AircraftTableRow);
