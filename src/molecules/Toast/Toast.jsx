import React from 'react';
import styles from './Toast.module.css';

/**
 * Toast Molecule
 * Renders a list of toast notifications
 */
export default function Toast({ toasts, onRemove }) {
  return (
    <div className={styles.container} aria-live="polite">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className={[styles.toast, styles[toast.type]].filter(Boolean).join(' ')}
          role="alert"
        >
          <span className={styles.message}>{toast.message}</span>
          <button className={styles.close} onClick={() => onRemove(toast.id)} aria-label="Dismiss">×</button>
        </div>
      ))}
    </div>
  );
}
