import React from 'react';
import styles from './Text.module.css';

/**
 * Text Atom — consistent typography
 * as: any HTML tag
 * variant: 'display' | 'heading' | 'subheading' | 'script' | 'body' | 'small' | 'caption'
 */
export default function Text({
  as: Tag = 'p',
  variant = 'body',
  color,
  align,
  className = '',
  children,
  ...props
}) {
  return (
    <Tag
      className={[styles.text, styles[variant], className].filter(Boolean).join(' ')}
      style={{ color: color || undefined, textAlign: align || undefined }}
      {...props}
    >
      {children}
    </Tag>
  );
}
