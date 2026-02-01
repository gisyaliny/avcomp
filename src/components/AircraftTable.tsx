import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Aircraft } from '@/types';
import styles from './AircraftTable.module.css';

interface Props {
  data: Aircraft[];
}

const formatCurrency = (val: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(val);
};

const formatNumber = (val: number) => new Intl.NumberFormat('en-US').format(val);

const getPriceStyle = (price: number) : string => {
   if (price > 45000000) return styles.bad;
   if (price < 25000000) return styles.good;
   return styles.warn;
};

const getHoursStyle = (hours: number) : string => {
   if (hours < 1000) return styles.good;
   if (hours > 3000) return styles.bad;
   return styles.warn;
};

export default function AircraftTable({ data }: Props) {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={`${styles.th} ${styles.stickyCol}`}>Aircraft</th>
            <th className={styles.th}>Make / Model</th>
            <th className={styles.th}>Year</th>
            <th className={`${styles.th} ${styles.alignRight}`}>Ask Price</th>
            <th className={`${styles.th} ${styles.alignRight}`}>TTAF</th>
            <th className={styles.th}>Location</th>
            <th className={`${styles.th} ${styles.alignRight}`}>DOM</th>
            <th className={styles.th}>Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className={styles.tr}>
              <td className={`${styles.td} ${styles.stickyCol}`}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    {/* Using simple img tag for external urls in development to avoid host config issues or requiring restart */}
                     <img 
                      src={item.thumbnailUrl} 
                      alt={item.model} 
                      className={styles.thumbnail}
                      width={60}
                      height={40}
                    />
                 </div>
              </td>
              <td className={styles.td}>
                <div className={styles.bold}>{item.make} {item.model}</div>
                <div className={styles.subtle} style={{ fontSize: '0.7em' }}>SN: {item.sn}</div>
              </td>
              <td className={styles.td}>{item.yom}</td>
              <td className={`${styles.td} ${styles.alignRight}`}>
                <span className={`${styles.badge} ${getPriceStyle(item.askPrice)}`}>
                    {formatCurrency(item.askPrice)}
                </span>
              </td>
              <td className={`${styles.td} ${styles.alignRight}`}>
                <span className={`${styles.badge} ${getHoursStyle(item.aftt)}`}>
                  {formatNumber(item.aftt)}
                </span>
              </td>
              <td className={styles.td}>{item.base}</td>
              <td className={`${styles.td} ${styles.alignRight}`}>{item.dom}</td>
              <td className={styles.td}>
                <Link href={`/inventory/${item.id}`} className={styles.actionBtn}>
                   View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
