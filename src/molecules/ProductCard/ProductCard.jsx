import React, { useState } from 'react';
import styles from './ProductCard.module.css';
import Button from '../../atoms/Button/Button';
import Badge from '../../atoms/Badge/Badge';
import ProductImage from '../../atoms/ProductImage/ProductImage';
import { useCart } from '../../context/CartContext';

/**
 * ProductCard Molecule
 * Combines ProductImage + Text + Badge + Button
 */
export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  }

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <ProductImage
          src={product.image}
          alt={product.name}
          emoji={product.emoji}
        />
        {product.badge && (
          <div className={styles.badgeWrap}>
            <Badge variant="rose">{product.badge}</Badge>
          </div>
        )}
      </div>

      <div className={styles.body}>
        <div className={styles.sizeTag}>{product.size}</div>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.desc}>{product.description}</p>

        <div className={styles.footer}>
          <span className={styles.price}>R{product.price}</span>
          <Button
            size="sm"
            variant={added ? 'secondary' : 'primary'}
            onClick={handleAdd}
            className={added ? styles.addedBtn : ''}
          >
            {added ? '✓ Added' : '+ Add'}
          </Button>
        </div>
      </div>
    </article>
  );
}
