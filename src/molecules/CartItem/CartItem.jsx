import React from 'react';
import styles from './CartItem.module.css';
import QuantitySelector from '../../atoms/QuantitySelector/QuantitySelector';
import { useCart } from '../../context/CartContext';

/**
 * CartItem Molecule
 * Shows one line item in the cart sidebar
 */
export default function CartItem({ item }) {
  const { updateQty, removeItem } = useCart();

  return (
    <div className={styles.item}>
      <span className={styles.emoji} role="img" aria-label={item.name}>{item.emoji}</span>

      <div className={styles.info}>
        <p className={styles.name}>{item.name}</p>
        <p className={styles.sub}>{item.size} · R{item.price} each</p>
      </div>

      <QuantitySelector
        value={item.qty}
        onChange={(qty) => updateQty(item.id, qty)}
        min={0}
      />

      <span className={styles.price}>R{item.price * item.qty}</span>

      <button
        className={styles.remove}
        onClick={() => removeItem(item.id)}
        aria-label={`Remove ${item.name}`}
      >×</button>
    </div>
  );
}
