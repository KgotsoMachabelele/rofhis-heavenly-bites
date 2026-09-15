import React from 'react';
import styles from './CartSidebar.module.css';
import CartItem from '../../molecules/CartItem/CartItem';
import OrderSummary from '../../molecules/OrderSummary/OrderSummary';
import Button from '../../atoms/Button/Button';
import { useCart } from '../../context/CartContext';

/**
 * CartSidebar Organism
 * Slide-in drawer with all cart items, summary, and checkout CTA
 */
export default function CartSidebar({ onCheckout }) {
  const { items, isOpen, closeCart, totalItems } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={[styles.overlay, isOpen ? styles.open : ''].join(' ')}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <aside
        className={[styles.sidebar, isOpen ? styles.open : ''].join(' ')}
        aria-label="Shopping cart"
        role="dialog"
        aria-modal="true"
      >
        <header className={styles.header}>
          <h2 className={styles.title}>🛒 Your Order</h2>
          <button className={styles.closeBtn} onClick={closeCart} aria-label="Close cart">✕</button>
        </header>

        <div className={styles.itemsWrap}>
          {items.length === 0 ? (
            <div className={styles.empty}>
              <span className={styles.emptyIcon}>🧺</span>
              <p className={styles.emptyTitle}>Your basket is empty</p>
              <p className={styles.emptySub}>Add some delicious treats above!</p>
            </div>
          ) : (
            <ul className={styles.list}>
              {items.map(item => (
                <li key={item.id}>
                  <CartItem item={item} />
                </li>
              ))}
            </ul>
          )}
        </div>

        <footer className={styles.footer}>
          {items.length > 0 && (
            <>
              <OrderSummary compact />
              <Button
                fullWidth
                size="lg"
                variant="primary"
                onClick={() => { closeCart(); onCheckout(); }}
                className={styles.checkoutBtn}
              >
                Proceed to Checkout →
              </Button>
            </>
          )}
          {items.length === 0 && (
            <Button fullWidth variant="secondary" onClick={closeCart}>
              Continue Shopping
            </Button>
          )}
        </footer>
      </aside>
    </>
  );
}
