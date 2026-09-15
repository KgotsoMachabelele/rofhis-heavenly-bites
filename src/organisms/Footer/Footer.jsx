import React from 'react';
import styles from './Footer.module.css';
import { CONTACT } from '../../data/products';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.script}>Rofhi's Heavenly Bites</p>
      <p className={styles.contact}>📧 {CONTACT.email} · 📞 {CONTACT.phone}</p>
      <p className={styles.location}>📍 {CONTACT.location} · Made to order with love 💕</p>
      <p className={styles.copy}>© {new Date().getFullYear()} Rofhi's Heavenly Bites. All rights reserved.</p>
    </footer>
  );
}
