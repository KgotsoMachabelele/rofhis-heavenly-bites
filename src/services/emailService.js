import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

export async function sendOrderEmail(form, items, total) {
  const orderLines = items
    .map(i => `• ${i.emoji} ${i.name} (${i.size}) ×${i.qty}  —  R${i.price * i.qty}`)
    .join('\n');

  return emailjs.send(
    EMAILJS_CONFIG.SERVICE_ID,
    EMAILJS_CONFIG.TEMPLATE_ID,
    {
      customer_name:       `${form.firstName} ${form.lastName}`,
      customer_phone:      form.phone,
      customer_email:      form.email || 'Not provided',
      delivery_preference: form.delivery === 'collection' ? 'Collection (Potchefstroom)' : 'Delivery',
      order_items:         orderLines,
      order_total:         `R${total}`,
      special_notes:       form.notes || 'None',
      order_date:          new Date().toLocaleString('en-ZA'),
    },
    EMAILJS_CONFIG.PUBLIC_KEY,
  );
}
