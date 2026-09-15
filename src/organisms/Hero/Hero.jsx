import React from 'react';
import styles from './Hero.module.css';
import Logo from '../../atoms/Logo/Logo';
import Badge from '../../atoms/Badge/Badge';
import Button from '../../atoms/Button/Button';
import { useCart } from '../../context/CartContext';

/**
 * Hero Organism
 * Full-width brand hero section
 */
export default function Hero({ onShopNow }) {
  const { totalItems, openCart } = useCart();

  return (
    <section className={styles.hero}>
      <div className={styles.blobs}>
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <div className={styles.blob3} />
      </div>

      <div className={styles.content}>
        <Logo size="lg" showText={false} className={styles.logo} />

        <p className={styles.script}>✨ Homemade with heart</p>

        <h1 className={styles.heading}>
          Sweet Treats,<br />
          <em>Baked With Love</em>
        </h1>

        <p className={styles.sub}>
          Freshly baked scones, biscuits, muffins and gourmet cookies —
          made to order in Potchefstroom.
        </p>

        <div className={styles.badges}>
          <Badge variant="sand">🍪 Made to Order</Badge>
          <Badge variant="sand">🌿 Homemade</Badge>
          <Badge variant="sand">💝 Quality Ingredients</Badge>
          <Badge variant="sand">📦 5L Batches</Badge>
        </div>

        <div className={styles.actions}>
          <Button size="lg" variant="primary" onClick={onShopNow}>
            Shop Now
          </Button>
          {totalItems > 0 && (
            <Button size="lg" variant="secondary" onClick={openCart}>
              View Cart ({totalItems})
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
