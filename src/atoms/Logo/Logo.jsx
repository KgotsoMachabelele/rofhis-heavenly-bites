import React from 'react';
import styles from './Logo.module.css';
// Replace this import with your actual logo file:
import logoSrc from '../../assets/images/logo.jpeg';


/**
 * Logo Atom
 * sizes: 'sm' | 'md' | 'lg'
 */
export default function Logo({ size = 'md', showText = true, className = '' }) {
  // Swap the placeholder below with: src={logoSrc}
  return (
    <div className={[styles.logo, styles[size], className].filter(Boolean).join(' ')}>
      <div className={styles.imgWrap}>
        {/* Replace the div below with <img src={logoSrc} alt="Rofhi's Heavenly Bites" className={styles.img} /> */}
      
        <img src={logoSrc} alt="Rofhi's Heavenly Bites" className={styles.img} />
      </div>
      {showText && (
        <div className={styles.text}>
          <span className={styles.name}>Rofhi's Heavenly Bites</span>
          <span className={styles.tagline}>Baked With Love</span>
        </div>
      )}
    </div>
  );
}
