import React from 'react';
import styles from './QuantitySelector.module.css';

/**
 * QuantitySelector Atom
 * Increment / decrement with min/max guards
 */
export default function QuantitySelector({ value, onChange, min = 1, max = 99 }) {
  return (
    <div className={styles.wrap}>
      <button
        className={styles.btn}
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        aria-label="Decrease quantity"
      >−</button>
      <span className={styles.value}>{value}</span>
      <button
        className={styles.btn}
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        aria-label="Increase quantity"
      >+</button>
    </div>
  );
}
