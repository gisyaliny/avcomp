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
}

const formatCurrency = (val: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(val);
};

function AircraftCard({ data, active, onClick }: Props) {
  const { user, toggleFavorite } = useAuth();
  const isFavorite = user?.favorites.includes(data.id);
  
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
         {/* Overlay gradient for text readability if needed */}
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
            // Add hover effect via manual style or CSS module? Inline for speed.
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
            {data.highlights?.slice(0, 3).map((h, i) => (
                <span key={i} className={styles.badge}>{h}</span>
            ))}
        </div>
      </div>
    </div>
  );
}

export default React.memo(AircraftCard);
