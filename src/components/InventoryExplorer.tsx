'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import React, { useState, useMemo, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { MOCK_AIRCRAFT } from "@/lib/mockData";
import DynamicRangeMap from "@/components/DynamicRangeMap";
import AircraftCard from "@/components/AircraftCard";
import styles from '@/app/page.module.css';
import { MAJOR_AIRPORTS, Airport } from '@/lib/airports';
import { Search, ChevronDown, SlidersHorizontal, RefreshCcw, MapPin, X, LayoutTemplate, Table as TableIcon, ArrowUp, ArrowDown, Save, Menu } from 'lucide-react';
import { Aircraft } from '@/types';
import AircraftTableRow from "@/components/AircraftTableRow";
import tableStyles from "@/components/AircraftTable.module.css";
import PriceFilter from "@/components/PriceFilter";
import TypeFilter from "@/components/TypeFilter";
import YearFilter from "@/components/YearFilter";
import ComparisonModal from "@/components/ComparisonModal";
import BasemapGallery from "@/components/BasemapGallery";
import { useAuth } from "@/components/AuthContext";
import { useUI } from './UIContext';
import { calculateDistanceNm } from '@/lib/distance';

export default function InventoryExplorer() {
  const { user, saveSearch } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // Initialize default states safely (may be overridden by useEffect on mount)
  const initialView = searchParams?.get('view') as 'split' | 'table' || 'split';
  const initialOrigin = (searchParams && MAJOR_AIRPORTS.find(a => a.code === searchParams.get('origin'))) || MAJOR_AIRPORTS[0];
  const initialSearch = searchParams?.get('q') || '';
  const initialMake = searchParams?.get('make') || 'All Makes';
  const initialMinRange = Number(searchParams?.get('minRange')) || 0;
  
  const pMin = searchParams?.get('pMin');
  const pMax = searchParams?.get('pMax');
  const initialPrice = { min: pMin ? Number(pMin) : null, max: pMax ? Number(pMax) : null };

  const initialTypes = searchParams?.get('types')?.split(',').filter(Boolean) || [];
  
  const yMin = searchParams?.get('yMin');
  const yMax = searchParams?.get('yMax');
  const initialYear = { min: yMin ? Number(yMin) : null, max: yMax ? Number(yMax) : null };

  const initialCompare = searchParams?.get('compare')?.split(',').filter(Boolean) || [];

  const sortKey = searchParams?.get('sortKey') as keyof Aircraft;
  const sortDir = searchParams?.get('sortDir') as 'asc' | 'desc';
  const initialSort = sortKey ? { key: sortKey, direction: sortDir || 'asc' } : null;

  const initialRanges = searchParams?.get('ranges')?.split(',').filter(Boolean) || [];
  const initialSelected = searchParams?.get('sel') || (initialRanges.length > 0 ? initialRanges[0] : undefined);

  const initialMinPax = Number(searchParams?.get('minPax')) || 0;
  const initialDestCode = searchParams?.get('dest');
  const initialDestination = initialDestCode ? MAJOR_AIRPORTS.find(a => a.code === initialDestCode) : undefined;

  // State
  const { viewMode, setViewMode, showFilters, setShowFilters, compareList, setCompareList, toggleCompare } = useUI();
  const [origin, setOrigin] = useState<Airport>(initialOrigin);
  const [destination, setDestination] = useState<Airport | undefined>(initialDestination);
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedMake, setSelectedMake] = useState<string>(initialMake);
  const [minRange, setMinRange] = useState<number>(initialMinRange);
  const [minPax, setMinPax] = useState<number>(initialMinPax);
  const [priceRange, setPriceRange] = useState(initialPrice);
  const [selectedTypes, setSelectedTypes] = useState<string[]>(initialTypes);
  const [yearRange, setYearRange] = useState(initialYear);
  const [showComparison, setShowComparison] = useState(false); // UI state only
  const [sortConfig, setSortConfig] = useState<{ key: keyof Aircraft; direction: 'asc' | 'desc' } | null>(initialSort);
  const [selectedAircraftId, setSelectedAircraftId] = useState<string | undefined>(initialSelected);
  const [activeRangeIds, setActiveRangeIds] = useState<string[]>(initialRanges);
  const [mapStyle, setMapStyle] = useState<'light' | 'dark' | 'satellite'>('light');
  const [mobileMapOpen, setMobileMapOpen] = useState(false);

  // Sync URL with State
  useEffect(() => {
      const params = new URLSearchParams();
      if (viewMode !== 'split') params.set('view', viewMode);
      if (origin.code !== MAJOR_AIRPORTS[0].code) params.set('origin', origin.code);
      if (searchTerm) params.set('q', searchTerm);
      if (selectedMake !== 'All Makes') params.set('make', selectedMake);
      if (minRange > 0) params.set('minRange', minRange.toString());
      if (minPax > 0) params.set('minPax', minPax.toString());
      if (priceRange.min) params.set('pMin', priceRange.min.toString());
      if (priceRange.max) params.set('pMax', priceRange.max.toString());
      if (selectedTypes.length > 0) params.set('types', selectedTypes.join(','));
      if (yearRange.min) params.set('yMin', yearRange.min.toString());
      if (yearRange.max) params.set('yMax', yearRange.max.toString());
      if (compareList.length > 0) params.set('compare', compareList.join(','));
      if (sortConfig) {
          params.set('sortKey', sortConfig.key);
          params.set('sortDir', sortConfig.direction);
      }
      if (selectedAircraftId) params.set('sel', selectedAircraftId);
      if (activeRangeIds.length > 0) params.set('ranges', activeRangeIds.join(','));
      if (destination) params.set('dest', destination.code);

      const newParamsString = params.toString();
      const currentParamsString = searchParams.toString();
      
      if (newParamsString === currentParamsString) return;

      const newUrl = `${pathname}${newParamsString ? '?' + newParamsString : ''}`;
      
      const timeoutId = setTimeout(() => {
         router.replace(newUrl, { scroll: false });
      }, 500);

      return () => clearTimeout(timeoutId);
  }, [viewMode, origin, searchTerm, selectedMake, minRange, minPax, priceRange, selectedTypes, yearRange, compareList, sortConfig, selectedAircraftId, activeRangeIds, pathname, router, searchParams]);

  const toggleSelection = (id: string) => {
      setSelectedAircraftId(id);
      
      // Check current state to determine action
      const isCurrentlyActive = activeRangeIds.includes(id);
      
      if (!isCurrentlyActive) {
          // Activating: Add to both range and comparison
          setActiveRangeIds(prev => [...prev, id]);
          setCompareList(current => {
              if (!current.includes(id) && current.length < 4) {
                  return [...current, id];
              }
              return current;
          });
      } else {
          // Deactivating: Remove from both range and comparison
          setActiveRangeIds(prev => prev.filter(i => i !== id));
          setCompareList(current => current.filter(i => i !== id));
      }
  };

  const removeRange = (id: string) => {
      setActiveRangeIds(prev => prev.filter(i => i !== id));
      setCompareList(current => current.filter(i => i !== id));
      if (selectedAircraftId === id) setSelectedAircraftId(undefined);
  };

  const clearAll = () => {
      setActiveRangeIds([]);
      setCompareList([]);
      setSelectedAircraftId(undefined);
  };
  
  // Sync initialCompare to global state on mount
  useEffect(() => {
    if (initialCompare.length > 0 && compareList.length === 0) {
        setCompareList(initialCompare);
    }
  }, []);

  const resetAll = () => {
      setOrigin(initialOrigin);
      setSearchTerm('');
      setSelectedMake('All Makes');
      setMinRange(0);
      setMinPax(0);
      setPriceRange({ min: null, max: null });
      setSelectedTypes([]);
      setYearRange({ min: null, max: null });
      setSortConfig(initialSort);
      setDestination(undefined);
      clearAll();
      // Optional: keep viewMode or reset it? User probably wants to keep view mode.
  };


  const handleSort = (key: keyof Aircraft) => {
      setSortConfig(current => {
          if (current?.key === key) {
              return { key, direction: current.direction === 'asc' ? 'desc' : 'asc' };
          }
          return { key, direction: 'asc' };
      });
  };

  // Derived state
  const availableMakes = useMemo(() => {
     const makes = Array.from(new Set(MOCK_AIRCRAFT.map(a => a.make)));
     return ['All Makes', ...makes.sort()];
  }, []);
  
  const routeDistance = useMemo(() => {
    if (!destination) return null;
    return calculateDistanceNm(origin.lat, origin.lng, destination.lat, destination.lng);
  }, [origin, destination]);

  const maxFleetRange = useMemo(() => Math.max(...MOCK_AIRCRAFT.map(a => a.rangeNm || 0)), []);

  const filteredAircraft = useMemo(() => {
     let result = MOCK_AIRCRAFT.filter(a => {
        const matchesSearch = 
            a.model.toLowerCase().includes(searchTerm.toLowerCase()) || 
            a.make.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesMake = selectedMake === 'All Makes' || a.make === selectedMake;
        const matchesRange = (a.rangeNm || 0) >= minRange;
        
        const price = a.askPrice;
        const matchesMinPrice = priceRange.min === null || price >= priceRange.min;
        const matchesMaxPrice = priceRange.max === null || price <= priceRange.max;
        
        const matchesType = selectedTypes.length === 0 || selectedTypes.includes(a.type || 'Jet');

        const yom = a.yom;
        const matchesMinYear = yearRange.min === null || yom >= yearRange.min;
        const matchesMaxYear = yearRange.max === null || yom <= yearRange.max;

        const maxPax = a.specs?.interior.typicalPAX || a.maxPax || 0;
        const matchesPax = maxPax >= minPax;

        return matchesSearch && matchesMake && matchesRange && matchesMinPrice && matchesMaxPrice && matchesType && matchesMinYear && matchesMaxYear && matchesPax;
     });

     if (sortConfig) {
         result.sort((a, b) => {
             const aValue = a[sortConfig.key];
             const bValue = b[sortConfig.key];
             
             if (aValue === bValue) return 0;
             if (aValue === undefined) return 1;
             if (bValue === undefined) return -1;
             
             const comparison = aValue > bValue ? 1 : -1;
             return sortConfig.direction === 'asc' ? comparison : -comparison;
         });
     }

     return result;
  }, [searchTerm, selectedMake, minRange, minPax, sortConfig, priceRange, selectedTypes, yearRange]);

  const renderSortIcon = (key: keyof Aircraft) => {
      if (sortConfig?.key !== key) return null;
      return sortConfig.direction === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />;
  };

  const handleSaveSearch = async () => {
      if (!user) {
          alert("Please log in to save searches.");
          return;
      }
      const naming = prompt("Name your search:");
      if (naming) {
          const params: Record<string, string> = {};
          if (searchTerm) params.searchTerm = searchTerm;
          if (selectedMake && selectedMake !== 'All Makes') params.make = selectedMake;
          if (selectedTypes.length > 0) params.types = selectedTypes.join(',');
          if (priceRange.min) params.minPrice = priceRange.min.toString();
          if (priceRange.max) params.maxPrice = priceRange.max.toString();
          if (yearRange.min) params.minYear = yearRange.min.toString();
          if (yearRange.max) params.maxYear = yearRange.max.toString();
          if (minRange > 0) params.minRange = minRange.toString();
          if (minPax > 0) params.minPax = minPax.toString();
          if (origin) params.origin = origin.code;
          if (destination) params.dest = destination.code;
          
          await saveSearch(naming, params);
          alert("Search saved!");
      }
  };

  return (
    <main className={`${styles.container} ${mobileMapOpen ? styles.mapActive : ''}`}>
      {/* Map Panel (Left) */}
      <section className={styles.mapPanel}>
        {/* Floating Filters Bar on Map */}
        <div className={styles.mapControls}>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap', width: '100%' }}>
                {/* Current Route Indicator */}
                <div 
                    onClick={() => router.push(`/mission?origin=${origin.code}${destination ? `&dest=${destination.code}` : ''}`)}
                    style={{ 
                        pointerEvents: 'auto', background: 'var(--bg-secondary)', padding: '0 1.25rem', borderRadius: '999px', border: '1px solid var(--bg-tertiary)', 
                        boxShadow: 'var(--shadow-md)', display: 'flex', alignItems: 'center', gap: '12px', height: '48px', cursor: 'pointer',
                        transition: 'all 0.2s' 
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--bg-tertiary)'}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <div style={{ width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '50%' }} />
                        <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>{origin.code}</span>
                    </div>
                    <ArrowDown size={14} style={{ transform: 'rotate(-90deg)', color: 'var(--text-muted)' }} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <div style={{ width: '8px', height: '8px', background: destination ? 'var(--secondary)' : 'var(--bg-tertiary)', borderRadius: '50%' }} />
                        <span style={{ fontWeight: 700, fontSize: '0.85rem', color: destination ? 'var(--text-primary)' : 'var(--text-muted)' }}>
                            {destination ? destination.code : 'SELECT DEST'}
                        </span>
                    </div>
                </div>
                
                {/* Basemap Gallery - Tablet/Mobile Hide for compactness */}
                <div className={styles.tabletHide}>
                    <BasemapGallery currentStyle={mapStyle} onChange={setMapStyle} />
                </div>
            </div>

            <div className={styles.hideOnMobile} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                {/* Make Filter */}
                <div style={{ pointerEvents: 'auto', position: 'relative' }}>
                    <select 
                        className={styles.filterPill} 
                        style={{ appearance: 'none', paddingRight: '2.5rem', height: '48px' }}
                        value={selectedMake}
                        onChange={(e) => setSelectedMake(e.target.value)}
                    >
                        {availableMakes.map(make => (
                            <option key={make} value={make}>{make}</option>
                        ))}
                    </select>
                    <ChevronDown size={14} style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-secondary)' }} />
                </div>
            </div>
        </div>
        
        {/* Expanded Filters Overlay */}
        {showFilters && (
            <div 
                className="filters-overlay"
                style={{ 
                    position: 'absolute', top: '1rem', left: '1rem', width: 'calc(100% - 2rem)', maxWidth: '500px', zIndex: 2000, 
                    background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '12px', 
                    border: '1px solid var(--bg-tertiary)', boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                    display: 'flex', flexDirection: 'column', gap: '1.5rem',
                    maxHeight: 'calc(100% - 2rem)', overflowY: 'auto'
                }}
            >
                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>Advanced Search</h2>
                      <button onClick={() => setShowFilters(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}>
                         <X size={20} />
                     </button>
                 </div>


                {/* Type Filter */}
                <TypeFilter 
                    selectedTypes={selectedTypes}
                    onChange={setSelectedTypes}
                />

                {/* Price Filter */}
                <div style={{ paddingBottom: '0.5rem', borderBottom: '1px solid var(--bg-tertiary)' }}>
                    <PriceFilter 
                        data={MOCK_AIRCRAFT}
                        minPrice={priceRange.min}
                        maxPrice={priceRange.max}
                        onChange={(min, max) => setPriceRange({ min, max })}
                    />
                </div>

                {/* Year Filter */}
                <div style={{ paddingBottom: '0.5rem' }}>
                    <YearFilter 
                        minYear={yearRange.min}
                        maxYear={yearRange.max}
                        onChange={(min, max) => setYearRange({ min, max })}
                    />
                </div>
                
                {/* Range Slider Filter */}
                <div>
                     <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>
                        Min Range: {minRange > 0 ? `${minRange.toLocaleString()} NM` : 'Any'}
                     </label>
                     <input 
                        type="range" 
                        min="0" 
                        max={maxFleetRange} 
                        step="100" 
                        value={minRange}
                        onChange={(e) => setMinRange(Number(e.target.value))}
                        style={{ width: '100%', accentColor: 'var(--primary)' }}
                     />
                     <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                         <span>0 NM</span>
                         <span>{maxFleetRange.toLocaleString()} NM</span>
                     </div>
                </div>

                {/* Min Pax Filter */}
                <div style={{ paddingBottom: '0.5rem' }}>
                     <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>
                        Min Passengers: {minPax > 0 ? `${minPax}+` : 'Any'}
                     </label>
                     <input 
                        type="range" 
                        min="0" 
                        max="20" // Reasonable max for this fleet
                        step="1" 
                        value={minPax}
                        onChange={(e) => setMinPax(Number(e.target.value))}
                        style={{ width: '100%', accentColor: 'var(--primary)' }}
                     />
                     <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                         <span>Any</span>
                         <span>20+</span>
                     </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', paddingTop: '1.5rem', borderTop: '2px solid var(--bg-tertiary)' }}>
                    <button 
                        onClick={resetAll}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1rem', background: 'transparent', border: '1px solid var(--bg-tertiary)', borderRadius: '8px', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 500 }}
                    >
                        <RefreshCcw size={16} /> Clear All
                    </button>
                    
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                        <button 
                            onClick={handleSaveSearch}
                            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1rem', background: 'var(--bg-primary)', border: '1px solid var(--bg-tertiary)', borderRadius: '8px', color: 'var(--text-primary)', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 600 }}
                        >
                            <Save size={16} /> Save Filter
                        </button>
                        <button 
                            onClick={() => setShowFilters(false)}
                            style={{ padding: '0.6rem 2rem', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 700, fontSize: '0.875rem', boxShadow: '0 4px 12px rgba(14, 165, 233, 0.3)' }}
                        >
                            Apply Filters
                        </button>
                    </div>
                </div>
            </div>
        )}

        <DynamicRangeMap 
            aircraft={MOCK_AIRCRAFT} 
            selectedAircraftId={selectedAircraftId}
            activeRangeIds={activeRangeIds}
            onAircraftSelect={toggleSelection}
            origin={origin}
            onOriginChange={setOrigin}
            mapStyle={mapStyle}
        />

        {/* Stacked Range Info Boxes - Center Bottom */}
        {activeRangeIds.length > 0 && (
            <div style={{
                position: 'absolute',
                bottom: mobileMapOpen ? '6rem' : '2rem',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 1001,
                display: (mobileMapOpen || viewMode === 'split') ? 'flex' : 'none',
                flexDirection: 'column-reverse',
                gap: '8px',
                pointerEvents: 'none',
                width: 'calc(100% - 2rem)',
                maxWidth: '400px',
                alignItems: 'center'
            }}>
                {/* Header Card with Clear All */}
                <div style={{
                    pointerEvents: 'auto',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--bg-tertiary)',
                    borderTop: '3px solid var(--primary)',
                    padding: '0.75rem 1rem',
                    borderRadius: '12px',
                    boxShadow: 'var(--shadow-lg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    width: '100%'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-outfit)' }}>
                            {activeRangeIds.length} Selected for Comparison
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button
                            onClick={() => setShowComparison(true)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.5rem 0.75rem',
                                background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent-dark) 100%)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                boxShadow: '0 2px 8px rgba(124, 98, 61, 0.3)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(124, 98, 61, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 2px 8px rgba(124, 98, 61, 0.3)';
                            }}
                        >
                            View Comparison
                        </button>
                        <button
                            onClick={clearAll}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.5rem 0.75rem',
                                background: 'var(--danger)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                boxShadow: '0 2px 8px rgba(200, 75, 62, 0.3)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(200, 75, 62, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 2px 8px rgba(200, 75, 62, 0.3)';
                            }}
                        >
                            <X size={14} /> Clear All
                        </button>
                    </div>
                </div>

                {/* Individual Aircraft Cards */}
                {activeRangeIds.map((id, index) => {
                    const ac = MOCK_AIRCRAFT.find(a => a.id === id);
                    if (!ac) return null;
                    const colors = ['#0EA5E9', '#F43F5E', '#10B981', '#F59E0B', '#8B5CF6'];
                    const color = colors[index % colors.length];
                    
                    return (
                        <div key={id} style={{
                            pointerEvents: 'auto',
                            background: 'var(--bg-secondary)',
                            borderStyle: 'solid',
                            borderWidth: '1px 1px 1px 4px',
                            borderColor: color,
                            padding: mobileMapOpen ? '0.5rem 0.75rem' : '0.75rem 1rem',
                            borderRadius: '8px',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '0.75rem',
                            width: '100%',
                            animation: 'slideUp 0.3s ease-out'
                        }}>
                            <div style={{ overflow: 'hidden' }}>
                                <div style={{ fontSize: '0.65rem', fontWeight: 700, color, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Flight Capabilities</div>
                                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{ac.make} {ac.model}</div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '1px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <MapPin size={10} style={{ color }} /> {ac.rangeNm.toLocaleString()} NM from {origin.name} ({origin.code})
                                    </div>
                                    <div style={{ fontSize: '0.65rem', opacity: 0.8 }}>
                                        Est. Endurance: {Math.floor(ac.rangeNm / (ac.specs?.performance?.maxCruiseSpeed || 450))}h {Math.round((ac.rangeNm / (ac.specs?.performance?.maxCruiseSpeed || 450) % 1) * 60)}m
                                    </div>
                                </div>
                            </div>
                            <button 
                                onClick={() => removeRange(id)}
                                style={{
                                    background: 'var(--bg-tertiary)',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '24px',
                                    height: '24px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    color: 'var(--text-secondary)',
                                    transition: 'background 0.2s'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = 'var(--danger-bg)'}
                                onMouseLeave={(e) => e.currentTarget.style.background = 'var(--bg-tertiary)'}
                            >
                                <X size={14} />
                            </button>
                        </div>
                    );
                })}
            </div>
        )}
      </section>

      {/* Comparison Modal */}
      {showComparison && (
          <ComparisonModal 
             selectedAircraft={MOCK_AIRCRAFT.filter(a => compareList.includes(a.id))}
             onClose={() => setShowComparison(false)}
             onRemove={(id) => setCompareList(prev => prev.filter(i => i !== id))}
          />
      )}

      {/* List Panel (Right) - Adjust width based on view mode? Or simple content swap */}
      <aside className={styles.listPanel} style={{ width: viewMode === 'table' ? '900px' : '450px', transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}>
        {/* Search & Header (Only show if not table view or if split) */}
        {viewMode === 'split' && (
            <div className={styles.listHeader}>
                <div className={styles.searchRow}>
                   <div className={styles.searchInputWrapper}>
                        <Search className={styles.searchIcon} size={18} />
                        <input 
                            type="text" 
                            className={styles.searchInput}
                            placeholder="Search by model, maker..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                   </div>
                   <button 
                        onClick={handleSaveSearch}
                        className={styles.iconButton}
                        title="Save Search"
                        style={{ 
                            background: 'var(--bg-secondary)', 
                            border: '1px solid var(--bg-tertiary)',
                            padding: '0.5rem',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            color: 'var(--text-secondary)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}
                   >
                        <Save size={18} />
                   </button>
                   <div style={{ width: '1px', height: '20px', background: 'var(--bg-tertiary)', margin: '0 8px' }} />
                </div>

                <div className={styles.filtersRow}>
                    <div className={styles.showOnMobile} style={{ width: '100%', gap: '0.5rem' }}>
                        <select 
                            className={styles.filterPill} 
                            style={{ flex: 1, height: '40px' }}
                            value={selectedMake}
                            onChange={(e) => setSelectedMake(e.target.value)}
                        >
                            {availableMakes.map(make => (
                                <option key={make} value={make}>{make}</option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.hideOnMobile} style={{ gap: '0.5rem' }}>
                        {availableMakes.slice(0, 4).map(make => (
                            <button 
                                key={make}
                                className={`${styles.filterPill} ${selectedMake === make ? styles.active : ''}`}
                                onClick={() => setSelectedMake(make === selectedMake ? 'All Makes' : make)}
                            >
                                {make}
                            </button>
                        ))}
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                        {filteredAircraft.length} Aircraft
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        Sort: <b>Recommended</b>
                    </div>
                </div>
            </div>
        )}

        {/* Table Header Moved Inside Scroll */}

        <div className={styles.listScroll} style={{ padding: viewMode === 'table' ? '0' : '1.5rem', overflow: viewMode === 'table' ? 'hidden' : 'auto' }}>
            {viewMode === 'split' ? (
                // Classic Card View
                filteredAircraft.map(aircraft => (
                    <div key={aircraft.id} style={{ position: 'relative' }}>
                        <div onClick={() => toggleSelection(aircraft.id)}>
                            <AircraftCard 
                                data={aircraft} 
                                active={activeRangeIds.includes(aircraft.id)}
                            />
                        </div>
                        {/* Actions */}
                         <div style={{ 
                             padding: '0.75rem 1rem', 
                             background: 'var(--bg-secondary)', 
                             borderBottomRightRadius: '16px',
                             borderBottomLeftRadius: '16px',
                             border: '1px solid var(--bg-tertiary)', 
                             borderTop: 'none',
                             marginTop: '-4px', // Connect to card
                             display: 'flex', gap: '0.75rem',
                             boxShadow: 'var(--shadow-sm)'
                         }}>
                             <Link href={`/inventory/${aircraft.id}`} style={{ flex: 1, textDecoration: 'none' }}>
                                <button style={{ width: '100%', padding: '0.6rem', background: 'var(--bg-primary)', border: '1px solid var(--bg-tertiary)', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                                    View Details
                                </button>
                             </Link>
                        </div>
                    </div>
                ))
            ) : (
                // Table View
                <div className={tableStyles.tableContainer} style={{ height: '100%', maxHeight: 'none', border: 'none', borderRadius: 0, boxShadow: 'none' }}>
                    <table className={tableStyles.table} style={{ tableLayout: 'fixed', minWidth: '850px' }}>
                        <colgroup>
                            <col style={{width: '100px'}} />
                            <col style={{width: 'auto'}} />
                            <col style={{width: '110px'}} />
                            <col style={{width: '100px'}} />
                            <col style={{width: '90px'}} />
                            <col style={{width: '110px'}} />
                            <col style={{width: '130px'}} />
                        </colgroup>
                        <thead className={tableStyles.thead}>
                            <tr>
                                <th className={tableStyles.th}>Photo</th>
                                <th className={`${tableStyles.th} ${sortConfig?.key === 'make' ? tableStyles.sorted : ''}`} onClick={() => handleSort('make')}>
                                    <div style={{display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', color: 'inherit'}}>
                                        Aircraft {renderSortIcon('make')}
                                    </div>
                                </th>
                                <th className={`${tableStyles.th} ${sortConfig?.key === 'askPrice' ? tableStyles.sorted : ''}`} onClick={() => handleSort('askPrice')}>
                                    <div style={{display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', color: 'inherit'}}>
                                        Price {renderSortIcon('askPrice')}
                                    </div>
                                </th>
                                <th className={tableStyles.th}>{destination ? 'FT (Mission)' : 'Endurance'}</th>
                                <th className={tableStyles.th}>Passengers</th>
                                <th className={`${tableStyles.th} ${sortConfig?.key === 'rangeNm' ? tableStyles.sorted : ''}`} onClick={() => handleSort('rangeNm')}>
                                    <div style={{display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', color: 'inherit'}}>
                                        Range {renderSortIcon('rangeNm')}
                                    </div>
                                </th>
                                <th className={tableStyles.th} style={{textAlign: 'right'}}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredAircraft.map(aircraft => (
                                <AircraftTableRow 
                                    key={aircraft.id}
                                    aircraft={aircraft}
                                    selected={activeRangeIds.includes(aircraft.id)}
                                    onSelect={toggleSelection}
                                    isCompared={compareList.includes(aircraft.id)}
                                    onCompare={toggleCompare}
                                    sortKey={sortConfig?.key}
                                    isTable={true}
                                    route={routeDistance ? {
                                        distance: routeDistance,
                                        originCode: origin.code,
                                        destCode: destination!.code
                                    } : undefined}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            
            {filteredAircraft.length === 0 && (
                <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                    <RefreshCcw size={32} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                    <p>No aircraft found matching criteria.</p>
                </div>
            )}
        </div>
      </aside>

      {/* Mobile Toggle Button */}
      <button 
        className={styles.mobileToggle}
        onClick={() => setMobileMapOpen(!mobileMapOpen)}
      >
        {mobileMapOpen ? (
            <>
                <LayoutTemplate size={20} />
                Show List
            </>
        ) : (
            <>
                <MapPin size={20} />
                Show Map
            </>
        )}
      </button>
    </main>
  );
}
