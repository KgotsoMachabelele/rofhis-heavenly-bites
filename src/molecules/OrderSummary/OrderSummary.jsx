import React from 'react';
import styles from './OrderSummary.module.css';
import Divider from '../../atoms/Divider/Divider';
import { useCart } from '../../context/CartContext';

/**
 * OrderSummary Molecule
 * Shows itemised list + totals — used in cart footer and checkout modal
 */
export default function OrderSummary({ compact = false }) {
  const { items, totalItems, totalPrice } = useCart();

  return (
    <div className={[styles.summary, compact ? styles.compact : ''].filter(Boolean).join(' ')}>
      <p className={styles.title}>Order Summary</p>

      <ul className={styles.list}>
        {items.map(item => (
          <li key={item.id} className={styles.row}>
            <span className={styles.itemLabel}>
              {item.emoji} {item.name}
              <span className={styles.qty}> ×{item.qty}</span>
            </span>
            <span className={styles.itemPrice}>R{item.price * item.qty}</span>
          </li>
        ))}
      </ul>

      <Divider />

      <div className={styles.row}>
        <span className={styles.label}>Items ({totalItems})</span>
        <span className={styles.value}>R{totalPrice}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.label}>Delivery</span>
        <span className={styles.value}>TBC with Rofhi</span>
      </div>

      <Divider />

      <div className={[styles.row, styles.total].join(' ')}>
        <span>Total</span>
        <span>R{totalPrice}</span>
      </div>
    </div>
  );
}
