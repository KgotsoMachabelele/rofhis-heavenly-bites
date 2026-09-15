import React from 'react';
import { CartProvider } from './context/CartContext';
import HomePage from './pages/HomePage/HomePage';

export default function App() {
  return (
    <CartProvider>
      <HomePage />
    </CartProvider>
  );
}
