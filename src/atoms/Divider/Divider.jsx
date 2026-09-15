import React from 'react';
import styles from './Divider.module.css';

export default function Divider({ label, className = '' }) {
  return (
    <div className={[styles.divider, className].filter(Boolean).join(' ')}>
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
}
