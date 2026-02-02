import React from 'react';
import Image from 'next/image';
import { Aircraft } from '@/types';
import styles from './AircraftCard.module.css';
import { Plane, Clock, MapPin, Heart } from 'lucide-react';
import { useAuth } from './AuthContext';

interface Props {
  data: Aircraft;
  active?: boolean;
  onClick?: () => void;
  route?: {
      distance: number;
      originCode: string;
      destCode: string;
  }
}

const formatCurrency = (val: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(val);
};

function AircraftCard({ data, active, onClick, route }: Props) {
  const { user, toggleFavorite, checkIsFavorite } = useAuth();
  const isFavorite = checkIsFavorite(data.id);
  
  const cruiseSpeed = data.specs?.performance?.maxCruiseSpeed || 450;
  const flyTimeHours = route ? route.distance / cruiseSpeed : 0;
  const hours = Math.floor(flyTimeHours);
  const minutes = Math.round((flyTimeHours - hours) * 60);

  const handleFavoriteClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (!user) {
          alert("Please log in to save favorites.");
          return;
      }
      toggleFavorite(data.id);
  };

  return (
    <div className={`${styles.card} ${active ? styles.active : ''}`} onClick={onClick}>
      <div className={styles.imageContainer}>
         <Image 
            src={data.thumbnailUrl} 
            alt={`${data.make} ${data.model}`} 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.image}
         />
         
         {route && (
             <div style={{
                 position: 'absolute',
                 top: '0.75rem',
                 left: '0.75rem',
                 background: 'var(--primary)',
                 color: 'white',
                 padding: '0.4rem 0.75rem',
                 borderRadius: '8px',
                 fontSize: '0.75rem',
                 fontWeight: 700,
                 boxShadow: '0 4px 12px rgba(14, 165, 233, 0.4)',
                 display: 'flex',
                 alignItems: 'center',
                 gap: '6px',
                 zIndex: 10
             }}>
                 <Clock size={14} />
                 {hours > 0 ? `${hours}h ` : ''}{minutes}m
             </div>
         )}
         
         <div style={{ 
             position: 'absolute', 
             bottom: 0, 
             left: 0, 
             right: 0, 
             height: '40%', 
             background: 'linear-gradient(to top, rgba(0,0,0,0.1), transparent)', 
             pointerEvents: 'none' 
         }} />
         
         {/* Favorite Button */}
         <button 
            onClick={handleFavoriteClick}
            style={{
                position: 'absolute',
                top: '0.75rem',
                right: '0.75rem',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(4px)',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
                zIndex: 10
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
         >
             <Heart 
                size={18} 
                className={isFavorite ? styles.heartFilled : styles.heartOutline} 
                fill={isFavorite ? '#ef4444' : 'transparent'}
                color={isFavorite ? '#ef4444' : 'white'}
             />
         </button>
      </div>
      
      <div className={styles.content}>
        <div className={styles.header}>
            <div className={styles.title}>{data.yom} {data.make} {data.model}</div>
            <div className={styles.price}>{formatCurrency(data.askPrice)}</div>
        </div>
        
        <div className={styles.subtitle}>
             <MapPin size={14} style={{ color: 'var(--text-muted)' }} /> 
             {data.base.split(',')[0]} • {data.rangeNm ? `${data.rangeNm.toLocaleString()} NM` : 'Range N/A'}
        </div>

        {route && (
            <div style={{ margin: '0.5rem 0', padding: '0.5rem', background: 'var(--bg-tertiary)', borderRadius: '6px', border: '1px dashed var(--primary)', fontSize: '0.75rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Missions:</span> <strong>{route.originCode} → {route.destCode}</strong>
                <div style={{ color: 'var(--primary)', fontWeight: 600 }}>{route.distance.toFixed(0)} NM Distance</div>
            </div>
        )}

        <div className={styles.specs}>
            <div className={styles.specItem}>
                <Clock size={14} />
                <span>{data.aftt ? `${data.aftt.toLocaleString()} hrs` : 'TTAF n/a'}</span>
            </div>
             <div className={styles.specItem} style={{ color: 'var(--text-secondary)' }}>
                <span>SN: {data.sn}</span>
            </div>
        </div>

        <div className={styles.badges}>
            {data.highlights?.slice(0, 2).map((h, i) => (
                <span key={i} className={styles.badge}>{h}</span>
            ))}
        </div>
      </div>
    </div>
  );
}

export default React.memo(AircraftCard);
