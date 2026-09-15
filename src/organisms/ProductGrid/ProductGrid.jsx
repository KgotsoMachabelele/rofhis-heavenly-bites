import React from 'react';
import styles from './ProductGrid.module.css';
import ProductCard from '../../molecules/ProductCard/ProductCard';
import CategoryTab from '../../molecules/CategoryTab/CategoryTab';
import { CATEGORIES, PRODUCTS } from '../../data/products';

/**
 * ProductGrid Organism
 * Tabbed product grid with category filtering
 */
export default function ProductGrid({ activeCategory, onCategoryChange }) {
  const filteredProducts = PRODUCTS.filter(p => p.category === activeCategory);
  const currentCategory  = CATEGORIES.find(c => c.id === activeCategory);

  return (
    <section className={styles.section}>
      {/* Tab bar */}
      <div className={styles.tabs} role="tablist" aria-label="Product categories">
        {CATEGORIES.map(cat => (
          <CategoryTab
            key={cat.id}
            category={cat}
            isActive={activeCategory === cat.id}
            onClick={onCategoryChange}
          />
        ))}
      </div>

      {/* Section header */}
      {currentCategory && (
        <div className={styles.header}>
          <h2 className={styles.title}>
            {currentCategory.emoji} {currentCategory.label}
          </h2>
          <p className={styles.desc}>{currentCategory.description}</p>
        </div>
      )}

      {/* Grid */}
      <div className={styles.grid} role="tabpanel">
        {filteredProducts.map((product, i) => (
          <div
            key={product.id}
            style={{ animationDelay: `${i * 60}ms` }}
            className={styles.cardWrap}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
