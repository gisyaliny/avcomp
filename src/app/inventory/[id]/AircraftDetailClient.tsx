'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MOCK_AIRCRAFT } from '@/lib/mockData';
import styles from './AircraftDetail.module.css';
import ContactModal from '@/components/ContactModal';
import { Share, Heart, ArrowLeft, Download, Check } from 'lucide-react';
import { useAuth } from '@/components/AuthContext';
import { Aircraft } from '@/types';

const formatCurrency = (val: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(val);
};

export default function AircraftDetailClient({ id }: { id: string }) {
    const aircraft = MOCK_AIRCRAFT.find((a) => a.id === id);
    const [showContact, setShowContact] = useState(false);
    const { user, toggleFavorite } = useAuth();
    
    if (!aircraft) {
        notFound();
    }
    
    const isFavorite = user?.favorites.includes(aircraft.id);
    const { specs } = aircraft;

    // Simulate Similar Listings (randomly pick 3 others excluding current)
    const similarAircraft = MOCK_AIRCRAFT
        .filter(a => a.id !== id && (a.make === aircraft.make || a.type === aircraft.type))
        .slice(0, 3);

    return (
        <main className={styles.container}>
            {/* Sticky Header Actions for Mobile/Tablet or just convenient access */}
            <div className={styles.stickyHeader}>
                <Link href="/" className={styles.backBtn}>
                    <ArrowLeft size={18} /> Back
                </Link>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                     <span className={styles.stickyPrice}>{formatCurrency(aircraft.askPrice)}</span>
                     <button 
                        className={styles.primaryBtn}
                        onClick={() => setShowContact(true)}
                     >
                        Contact Seller
                     </button>
                </div>
            </div>

            {/* Main Hero Grid */}
            <div className={styles.heroGrid}>
                {/* Main Hero Image */}
                <div className={styles.heroMain}>
                    <Image 
                        src={aircraft.mainImageUrl} 
                        alt={`${aircraft.make} ${aircraft.model}`} 
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                    <div className={styles.heroOverlay}>
                         <div className={styles.heroBadge}>
                            Pre-Owned
                         </div>
                    </div>
                </div>

                {/* Secondary Images (Simulated Gallery) */}
                <div className={styles.heroSide}>
                    <div className={styles.sideImg}>
                        <Image src={aircraft.mainImageUrl} alt="Interior View" fill style={{ objectFit: 'cover' }} />
                         {/* Overlay to simulate difference */}
                         <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.1)' }} />
                    </div>
                    <div className={styles.sideImg}>
                        <Image src={aircraft.mainImageUrl} alt="Cockpit View" fill style={{ objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.2)' }} />
                    </div>
                </div>
            </div>

            <div className={styles.contentLayout}>
                {/* Left Column: Details */}
                <div className={styles.mainContent}>
                     <div className={styles.headerBlock}>
                         <div>
                            <h1 className={styles.title}>{aircraft.yom} {aircraft.make} {aircraft.model}</h1>
                            <div className={styles.subtext}>
                                <span>SN: {aircraft.sn}</span>
                                <span className={styles.dot}>•</span>
                                <span>Reg: {aircraft.reg}</span>
                                <span className={styles.dot}>•</span>
                                <span>{aircraft.base}</span>
                            </div>
                         </div>
                         <div className={styles.actionRow}>
                             <button className={styles.iconBtn} onClick={() => toggleFavorite(aircraft.id)}>
                                 <Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} color={isFavorite ? '#ef4444' : 'currentColor'} />
                             </button>
                             <button className={styles.iconBtn} title="Share">
                                 <Share size={20} />
                             </button>
                         </div>
                     </div>
                    
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Overview</h2>
                        <p className={styles.description}>{aircraft.description || "This aircraft represents a prime example of its type, meticulously maintained and ready for immediate delivery. Contact us for full logs and maintenance history."}</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Key Highlights</h2>
                        <div className={styles.highlightsGrid}>
                             {aircraft.highlights?.map((hl, i) => (
                                 <div key={i} className={styles.highlightItem}>
                                     <Check size={18} className={styles.checkIcon} />
                                     {hl}
                                 </div>
                             )) || <p>Contact seller for detailed highlights.</p>}
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Specifications</h2>
                        <div className={styles.tabs}>
                            {/* Simple Tabs for Specs Categories */}
                            <div className={styles.specCategory}>Performance</div>
                            <div className={styles.specGrid}>
                                <SpecItem label="Max Range" value={`${specs?.performance.maxRange} NM`} />
                                <SpecItem label="Cruise Speed" value={`${specs?.performance.maxCruiseSpeed} kts`} />
                                <SpecItem label="Max Altitude" value={`${specs?.performance.maxCruiseAltitude?.toLocaleString()} ft`} />
                            </div>
                        
                            <div className={styles.specCategory}>Interior</div>
                            <div className={styles.specGrid}>
                                <SpecItem label="Passengers" value={specs?.interior.typicalPAX.toString()} />
                                <SpecItem label="Cabin Height" value={`${specs?.dimensions.cabinHeight} ft`} />
                                <SpecItem label="Cabin Width" value={`${specs?.dimensions.cabinWidth} ft`} />
                                <SpecItem label="Forward Galley" value={specs?.interior.galley ? 'Yes' : 'No'} />
                                <SpecItem label="Lavatory" value={specs?.interior.lavatory ? 'Yes' : 'No'} />
                            </div>
                         </div>
                    </section>
                </div>

                {/* Right Column: Key Stats & Contact */}
                <div className={styles.sidebar}>
                    <div className={styles.priceCard}>
                        <div className={styles.priceLabel}>Asking Price</div>
                        <div className={styles.bigPrice}>{formatCurrency(aircraft.askPrice)}</div>
                        <button 
                            className={`${styles.primaryBtn} ${styles.fullWidth}`}
                            onClick={() => setShowContact(true)}
                        >
                            Contact Seller
                        </button>
                        <button className={`${styles.outlineBtn} ${styles.fullWidth}`}>
                            <Download size={18} /> Download Brochure
                        </button>
                    </div>

                    <div className={styles.infoCard}>
                        <h3 className={styles.sidebarTitle}>Seller Information</h3>
                        <div className={styles.sellerInfo}>
                            <div className={styles.sellerAvatar}>AV</div>
                            <div>
                                <div className={styles.sellerName}>AvComp Premier Sales</div>
                                <div className={styles.sellerRole}>Authorized Dealer</div>
                            </div>
                        </div>
                        <div className={styles.sellerMeta}>
                            <div>Member since 2024</div>
                            <div>Response time: &lt; 2 hrs</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Similar Aircraft */}
            <div className={styles.similarSection}>
                <h2 className={styles.sectionTitle}>Similar Listings</h2>
                <div className={styles.similarGrid}>
                    {similarAircraft.map(ac => (
                         <Link key={ac.id} href={`/inventory/${ac.id}`} className={styles.similarCard}>
                             <div className={styles.similarImg}>
                                 <Image src={ac.thumbnailUrl} alt={ac.model} fill style={{ objectFit: 'cover' }} />
                             </div>
                             <div className={styles.similarContent}>
                                 <div className={styles.similarTitle}>{ac.yom} {ac.make} {ac.model}</div>
                                 <div className={styles.similarPrice}>{formatCurrency(ac.askPrice)}</div>
                             </div>
                         </Link>
                    ))}
                </div>
            </div>

            {showContact && <ContactModal aircraftTitle={`${aircraft.yom} ${aircraft.make} ${aircraft.model}`} onClose={() => setShowContact(false)} />}
        </main>
    );
}

function SpecItem({ label, value }: { label: string, value?: string }) {
    return (
        <div className={styles.specItem}>
            <span className={styles.specLabel}>{label}</span>
            <span className={styles.specValue}>{value || '-'}</span>
        </div>
    );
}
