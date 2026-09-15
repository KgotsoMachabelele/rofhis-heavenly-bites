import React from 'react';
import styles from './Header.module.css';
import Logo from '../../atoms/Logo/Logo';
import Button from '../../atoms/Button/Button';
import { useCart } from '../../context/CartContext';
import { CATEGORIES } from '../../data/products';

/**
 * Header Organism
 * Sticky nav with logo, category nav, cart button
 */
export default function Header({ activeCategory, onCategoryChange }) {
  const { totalItems, openCart } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Logo size="sm" showText={true} />

        <nav className={styles.nav} role="navigation" aria-label="Categories">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              className={[styles.navBtn, activeCategory === cat.id ? styles.navActive : ''].filter(Boolean).join(' ')}
              onClick={() => onCategoryChange(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </nav>

        <Button variant="primary" size="sm" onClick={openCart} className={styles.cartBtn}>
          🛒 Cart
          {totalItems > 0 && (
            <span className={styles.cartBadge}>{totalItems}</span>
          )}
        </Button>
      </div>
    </header>
  );
}
