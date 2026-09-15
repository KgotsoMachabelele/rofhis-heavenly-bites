import React from 'react';
import styles from './CategoryTab.module.css';

/**
 * CategoryTab Molecule
 * Tab pill for switching product categories
 */
export default function CategoryTab({ category, isActive, onClick }) {
  return (
    <button
      className={[styles.tab, isActive ? styles.active : ''].filter(Boolean).join(' ')}
      onClick={() => onClick(category.id)}
      aria-selected={isActive}
      role="tab"
    >
      <span className={styles.emoji}>{category.emoji}</span>
      <span className={styles.label}>{category.label}</span>
    </button>
  );
}
