import React from 'react';
import styles from './SuccessModal.module.css';
import Button from '../../atoms/Button/Button';
import { CONTACT } from '../../data/products';

/**
 * SuccessModal Organism
 * Post-order confirmation screen
 */
export default function SuccessModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className={styles.modal} role="dialog" aria-modal="true">
        <span className={styles.icon}>🎉</span>
        <h2 className={styles.title}>Order Received!</h2>
        <p className={styles.body}>
          Thank you! Your order has been sent to Rofhi's Heavenly Bites.
        </p>

        <div className={styles.infoBox}>
          <p className={styles.infoTitle}>What happens next?</p>
          <p>Rofhi will contact you within 24 hours to confirm your order, arrange payment and organise collection or delivery.</p>
          <div className={styles.contacts}>
            <span>📞 {CONTACT.phone}</span>
            <span>📧 {CONTACT.email}</span>
          </div>
        </div>

        <p className={styles.script}>Baked fresh, with love 💕</p>

        <Button size="lg" variant="primary" onClick={onClose}>
          Continue Shopping
        </Button>
      </div>
    </div>
  );
}
