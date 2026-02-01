'use client';

import dynamic from 'next/dynamic';
import React, { useMemo } from 'react';
import { Aircraft } from '@/types';

const RangeMap = dynamic(
  () => import('./RangeMap'),
  { 
    loading: () => <div style={{ height: '60vh', background: 'var(--bg-secondary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>Loading Map Interaction...</div>,
    ssr: false 
  }
);

import { Airport } from '@/lib/airports';

interface Props {
    aircraft: Aircraft[];
    selectedAircraftId?: string;
    activeRangeIds?: string[];
    onAircraftSelect?: (id: string) => void;
    origin: Airport;
    onOriginChange: (airport: Airport) => void;
    mapStyle: 'light' | 'dark' | 'satellite';
}

export default function DynamicRangeMap(props: Props) {
    return <RangeMap {...props} />;
}
