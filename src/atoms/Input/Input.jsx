import React from 'react';
import styles from './Input.module.css';

/**
 * Input Atom — form inputs, selects, textareas
 * type: 'text' | 'email' | 'tel' | 'select' | 'textarea'
 */
export default function Input({
  type = 'text',
  label,
  id,
  error,
  required = false,
  options = [],   // for select
  rows = 3,       // for textarea
  className = '',
  ...props
}) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={[styles.group, error ? styles.hasError : '', className].filter(Boolean).join(' ')}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}{required && <span className={styles.required}>*</span>}
        </label>
      )}

      {type === 'select' ? (
        <select id={inputId} className={styles.field} {...props}>
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea id={inputId} className={styles.field} rows={rows} {...props} />
      ) : (
        <input id={inputId} type={type} className={styles.field} {...props} />
      )}

      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
