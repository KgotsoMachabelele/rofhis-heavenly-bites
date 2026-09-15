import React, { useState } from 'react';
import styles from './CheckoutModal.module.css';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import OrderSummary from '../../molecules/OrderSummary/OrderSummary';
import Divider from '../../atoms/Divider/Divider';
import { useCart } from '../../context/CartContext';
import { CONTACT } from '../../data/products';

const DELIVERY_OPTIONS = [
  { value: '',           label: '— Select preference —' },
  { value: 'collection', label: 'Collection (Potchefstroom)' },
  { value: 'delivery',   label: 'Delivery (contact for area)' },
];

/**
 * CheckoutModal Organism
 * Full checkout form with order summary
 */
export default function CheckoutModal({ isOpen, onClose, onSuccess }) {
  const { clearCart } = useCart();

  const [form, setForm] = useState({
    firstName: '', lastName: '', phone: '',
    email: '', delivery: '', notes: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  function set(field, value) {
    setForm(f => ({ ...f, [field]: value }));
    if (errors[field]) setErrors(e => ({ ...e, [field]: '' }));
  }

  function validate() {
    const e = {};
    if (!form.firstName.trim()) e.firstName = 'Required';
    if (!form.lastName.trim())  e.lastName  = 'Required';
    if (!form.phone.trim())     e.phone     = 'Required';
    if (!form.delivery)         e.delivery  = 'Please select one';
    return e;
  }

  async function handleSubmit() {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 900)); // simulate submit
    setLoading(false);
    clearCart();
    setForm({ firstName: '', lastName: '', phone: '', email: '', delivery: '', notes: '' });
    onSuccess();
  }

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className={styles.modal} role="dialog" aria-modal="true" aria-label="Checkout">

        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>Place Your Order</h2>
            <p className={styles.sub}>Fill in your details and we'll be in touch!</p>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">✕</button>
        </div>

        <div className={styles.body}>
          <OrderSummary compact />

          <Divider label="Your Details" className={styles.divider} />

          <div className={styles.formRow}>
            <Input label="First Name" required value={form.firstName} onChange={e => set('firstName', e.target.value)} error={errors.firstName} placeholder="Your name" />
            <Input label="Last Name"  required value={form.lastName}  onChange={e => set('lastName',  e.target.value)} error={errors.lastName}  placeholder="Your surname" />
          </div>

          <Input label="Phone Number" type="tel"   required value={form.phone}    onChange={e => set('phone',    e.target.value)} error={errors.phone}    placeholder="082 123 4567" />
          <Input label="Email"        type="email"          value={form.email}    onChange={e => set('email',    e.target.value)}                          placeholder="your@email.com (optional)" />
          <Input label="Delivery / Collection" type="select" required value={form.delivery} onChange={e => set('delivery', e.target.value)} error={errors.delivery} options={DELIVERY_OPTIONS} />
          <Input label="Special Instructions" type="textarea" value={form.notes} onChange={e => set('notes', e.target.value)} placeholder="Allergies, delivery notes, special requests..." rows={3} />

          <div className={styles.paymentNote}>
            <strong>💳 Payment:</strong> EFT or cash on collection/delivery.
            Rofhi will contact you via WhatsApp or call at <strong>{CONTACT.phone}</strong> to confirm and arrange.
          </div>

          <Button fullWidth size="lg" variant="primary" onClick={handleSubmit} loading={loading}>
            🌸 Place My Order
          </Button>

          <button className={styles.cancelLink} onClick={onClose}>← Back to cart</button>
        </div>
      </div>
    </div>
  );
}
