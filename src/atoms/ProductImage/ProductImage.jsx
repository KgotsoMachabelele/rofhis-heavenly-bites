import React from 'react';
import styles from './ProductImage.module.css';

/**
 * ProductImage Atom
 * Displays product image or emoji fallback.
 * Drop your images in src/assets/images/ and pass src={require('...')}
 */
export default function ProductImage({ src, alt, emoji = '🍪', className = '' }) {
  return (
    <div className={[styles.wrap, className].filter(Boolean).join(' ')}>
      {src ? (
        <img src={src} alt={alt} className={styles.img} />
      ) : (
        <span className={styles.emoji} role="img" aria-label={alt}>{emoji}</span>
      )}
      <div className={styles.shimmer} />
    </div>
  );
}
