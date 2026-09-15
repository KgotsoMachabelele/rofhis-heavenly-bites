import React, { useState, useRef } from 'react';
import ShopLayout from '../../templates/ShopLayout/ShopLayout';
import Hero from '../../organisms/Hero/Hero';
import ProductGrid from '../../organisms/ProductGrid/ProductGrid';
import CheckoutModal from '../../organisms/CheckoutModal/CheckoutModal';
import SuccessModal from '../../organisms/SuccessModal/SuccessModal';
import { useToast } from '../../hooks/useToast';

/**
 * HomePage Page
 * The single page for Rofhi's Heavenly Bites shop.
 * Composes: ShopLayout > Hero + ProductGrid + Modals
 */
export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState('scones');
  const [checkoutOpen,   setCheckoutOpen]   = useState(false);
  const [successOpen,    setSuccessOpen]     = useState(false);

  const { toasts, addToast, removeToast } = useToast();
  const gridRef = useRef(null);

  function handleShopNow() {
    gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function handleCategoryChange(cat) {
    setActiveCategory(cat);
    gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function handleOrderSuccess() {
    setCheckoutOpen(false);
    setSuccessOpen(true);
    addToast('🎉 Order placed successfully!', 'success');
  }

  return (
    <>
      <ShopLayout
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        onCheckout={() => setCheckoutOpen(true)}
        toasts={toasts}
        onRemoveToast={removeToast}
      >
        <Hero onShopNow={handleShopNow} />

        <div ref={gridRef}>
          <ProductGrid
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>
      </ShopLayout>

      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        onSuccess={handleOrderSuccess}
      />

      <SuccessModal
        isOpen={successOpen}
        onClose={() => setSuccessOpen(false)}
      />
    </>
  );
}
