import React from 'react';
import styles from './ShopLayout.module.css';
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';
import CartSidebar from '../../organisms/CartSidebar/CartSidebar';
import Toast from '../../molecules/Toast/Toast';

/**
 * ShopLayout Template
 * Defines the page skeleton: Header + main slot + Footer + Cart + Toasts
 */
export default function ShopLayout({
  children,
  activeCategory,
  onCategoryChange,
  onCheckout,
  toasts,
  onRemoveToast,
}) {
  return (
    <div className={styles.layout}>
      <Header activeCategory={activeCategory} onCategoryChange={onCategoryChange} />

      <main className={styles.main}>
        <div className={styles.container}>
          {children}
        </div>
      </main>

      <Footer />

      <CartSidebar onCheckout={onCheckout} />

      <Toast toasts={toasts} onRemove={onRemoveToast} />
    </div>
  );
}
