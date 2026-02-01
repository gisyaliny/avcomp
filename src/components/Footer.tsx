'use strict';

import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.copyright}>
                    © {currentYear} AVComp Marketplace | MIT Licensed
                </div>
                
                <div className={styles.linksSide}>
                    <a href="https://leviateair.com/charter/" target="_blank" rel="noopener noreferrer">Charter</a>
                    <a href="https://leviateair.com/sales-acquisitions/" target="_blank" rel="noopener noreferrer">Sales</a>
                    <a href="https://leviateair.com/aircraft-management/" target="_blank" rel="noopener noreferrer">Management</a>
                    <a href="https://leviateair.com/privacy/" target="_blank" rel="noopener noreferrer">Privacy</a>
                    <span className={styles.leviateNote}>Data by Leviate Air</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
