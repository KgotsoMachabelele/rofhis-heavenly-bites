import React from 'react';
import styles from './Badge.module.css';

/**
 * Badge Atom — small label for product tags
 * variants: 'rose' | 'sand' | 'brown' | 'green'
 */
export default function Badge({ children, variant = 'rose', className = '' }) {
  return (
    <span className={[styles.badge, styles[variant], className].filter(Boolean).join(' ')}>
      {children}
    </span>
  );
}
