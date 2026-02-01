'use client';

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, Circle, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { MAJOR_AIRPORTS, Airport } from '@/lib/airports';
import { calculateDistanceNm } from '@/lib/distance';
import styles from './RangeMap.module.css';
import { Aircraft } from '@/types';
import { Plane } from 'lucide-react';
import { renderToStaticMarkup } from 'react-dom/server';

function RangeCircle({ center, radius, color }: { center: [number, number], radius: number, color: string }) {
    const map = useMap();
    const circleRef = React.useRef<L.Circle>(null);

    useEffect(() => {
        // Delay slightly to ensure map is ready and animation is smooth
        const timer = setTimeout(() => {
             if (circleRef.current) {
                circleRef.current.openPopup();
            }
        }, 800);
        return () => clearTimeout(timer);
    }, [center, radius]);

    return (
         <Circle 
            center={center}
            radius={radius}
            pathOptions={{ 
                color: color, 
                fillColor: color, 
                fillOpacity: 0.1, 
                weight: 2, 
                dashArray: '5, 5' 
            }}
        />
    )
}

interface RangeMapProps {
  aircraft: Aircraft[];
  selectedAircraftId?: string;
  activeRangeIds?: string[];
  onAircraftSelect?: (id: string) => void;
  // Origin for the "flight planner" aspect
  origin: Airport;
  onOriginChange: (airport: Airport) => void;
  mapStyle: 'light' | 'dark' | 'satellite';
}

// Custom Plane Icon for Airports
const createPlaneIcon = (isSelected: boolean) => {
    const color = isSelected ? '#3b82f6' : '#64748b'; // Blue vs Slate-500
    const size = isSelected ? 32 : 24;
    
    const svgString = renderToStaticMarkup(
        <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            background: isSelected ? 'rgba(59, 130, 246, 0.2)' : 'rgba(255, 255, 255, 0.8)', 
            backdropFilter: 'blur(4px)',
            borderRadius: '50%', 
            padding: '4px',
            border: `2px solid ${color}`,
            width: `${size}px`,
            height: `${size}px`,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
           <Plane size={size - 10} color={color} fill={color} style={{ transform: 'rotate(-45deg)' }} />
        </div>
    );

    return L.divIcon({
        html: svgString,
        className: 'custom-plane-icon',
        iconSize: [size, size],
        iconAnchor: [size/2, size/2],
    });
};

// Custom Price Marker
const createPriceMarker = (price: number, isSelected: boolean) => {
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        notation: 'compact',
        maximumFractionDigits: 1
    }).format(price);

    // Using renderToStaticMarkup to ensure styles are applied correctly in Leaflet
    const svgString = renderToStaticMarkup(
        <div style={{ 
            background: isSelected ? '#0EA5E9' : '#FFFFFF', 
            color: isSelected ? '#FFFFFF' : '#0F172A',
            padding: '4px 10px',
            borderRadius: '999px',
            fontWeight: 700,
            fontSize: '11px',
            boxShadow: isSelected ? '0 4px 12px rgba(14, 165, 233, 0.4)' : '0 2px 8px rgba(0,0,0,0.12)',
            border: isSelected ? '1px solid #0EA5E9' : '1px solid rgba(0,0,0,0.05)',
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: isSelected ? 'scale(1.1)' : 'scale(1)',
            transition: 'all 0.2s ease'
        }}>
            {formattedPrice}
        </div>
    );

    return L.divIcon({
        html: svgString,
        className: 'custom-price-marker',
        iconSize: [60, 28],
        iconAnchor: [30, 14],
    });
};

// Component to handle map view updates
function MapUpdater({ origin }: { origin: Airport }) {
  const map = useMap();
  const [prevOrigin, setPrevOrigin] = useState(origin.code);

  useEffect(() => {
    if (origin.code !== prevOrigin) {
        map.flyTo([origin.lat, origin.lng], 5, { duration: 1.5 });
        setPrevOrigin(origin.code);
    }
  }, [origin, map, prevOrigin]);
  return null;
}

function MapResizer() {
  const map = useMap();
  
  useEffect(() => {
    const observer = new ResizeObserver(() => {
        map.invalidateSize();
    });
    
    observer.observe(map.getContainer());
    
    return () => {
        observer.disconnect();
    };
  }, [map]);
  
  return null;
}

export default function RangeMap({ aircraft, selectedAircraftId, activeRangeIds, onAircraftSelect, origin, onOriginChange, mapStyle }: RangeMapProps) {
  // We can calculate distance if needed, but the main goal is visualizing "Range"
  // from the chosen origin.
  

  const selectedAircraft = aircraft.find(a => a.id === selectedAircraftId);
  const usAirports = MAJOR_AIRPORTS.filter(a => a.code.startsWith('K'));

  return (
    <div className={styles.mapWrapper} style={{ borderRadius: 0, border: 'none', position: 'relative' }}>
      <MapContainer 
        center={[origin.lat, origin.lng]} 
        zoom={4} 
        style={{ height: '100%', width: '100%', background: 'var(--bg-primary)' }}
        zoomControl={false}
      >
        <MapResizer />
        <MapUpdater origin={origin} />

        {/* Conditional Layer Rendering */}
        {mapStyle === 'dark' && (
             <TileLayer
              attribution='&copy; CARTO'
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />
        )}
        {mapStyle === 'light' && (
             <TileLayer
              attribution='&copy; CARTO'
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
        )}
        {mapStyle === 'satellite' && (
             <TileLayer
              attribution='&copy; Esri'
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
        )}

        {/* US Airports Markers (Selectable Origins) */}
        {usAirports.map(airport => {
            const isSelected = airport.code === origin.code;
            return (
                <Marker 
                    key={airport.code}
                    position={[airport.lat, airport.lng]}
                    icon={createPlaneIcon(isSelected)}
                    eventHandlers={{
                        click: () => onOriginChange(airport)
                    }}
                >
                    <Popup>
                        <div style={{ textAlign: 'center' }}>
                            <b>{airport.code}</b><br/>
                            {airport.name}<br/>
                            {isSelected ? (
                                <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Current Origin</span>
                            ) : (
                                <button 
                                    style={{ marginTop: '0.25rem', padding: '0.2rem 0.5rem', cursor: 'pointer' }}
                                    onClick={() => onOriginChange(airport)}
                                >
                                    Set as Departure
                                </button>
                            )}
                        </div>
                    </Popup>
                </Marker>
            )
        })}

        {/* Origin Marker (The pin itself) */}
        <Marker position={[origin.lat, origin.lng]}>
          <Popup>Origin: {origin.code}</Popup>
        </Marker>

        {/* Show Aircraft Bases as Price Markers */}
        {aircraft.map(ac => {
             // Quick hack to map string base to coords
             // In prod, base would be an object or we'd geocode
             let position: [number, number] | null = null;
             if (ac.base.includes('Teterboro')) position = [40.8501, -74.0608];
             else if (ac.base.includes('Van Nuys')) position = [34.2098, -118.4899];
             else if (ac.base.includes('Dallas')) position = [32.8471, -96.8517];
             else if (ac.base.includes('Le Bourget')) position = [48.9694, 2.4414];
             else if (ac.base.includes('Lauderdale')) position = [26.0726, -80.1527];
             else if (ac.base.includes('Wichita')) position = [37.6499, -97.4331];
             
             if (!position) return null; // Skip if unknown base
             
             const isSelected = ac.id === selectedAircraftId;

             return (
                 <Circle 
                    key={ac.id}
                    center={position}
                    radius={10000} // Small dot for base
                    pathOptions={{
                        color: isSelected ? 'var(--primary)' : 'var(--text-muted)',
                        fillColor: isSelected ? 'var(--primary)' : 'var(--text-muted)',
                        fillOpacity: 0.8,
                        weight: isSelected ? 3 : 1
                    }}
                    eventHandlers={{
                        click: () => onAircraftSelect?.(ac.id)
                    }}
                 >
                    <Popup>{ac.make} {ac.model} <br/> Base: {ac.base}</Popup>
                 </Circle>
             );
        })}

        {/* Range Circles for Active Aircraft */}
        {activeRangeIds?.map((id, index) => {
            const ac = aircraft.find(a => a.id === id);
            if (!ac) return null;
            const colors = ['#0EA5E9', '#F43F5E', '#10B981', '#F59E0B', '#8B5CF6'];
            const color = colors[index % colors.length];
            const range = ac.specs?.performance.typicalRange || ac.rangeNm;
            
            return (
                <RangeCircle 
                    key={id}
                    center={[origin.lat, origin.lng]}
                    radius={range * 1852}
                    color={color}
                />
            );
        })}
      </MapContainer>

    </div>
  );
}
