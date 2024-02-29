import { style } from '@vanilla-extract/css';

import { vars } from '@/vars.css';

export const hiddenContaier = style({
  display: 'none',
});

export const container = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: vars.color.base,
});

export const modal = style({
  position: 'relative',
  width: '480px',
  backgroundColor: '#f3f4f6',
  borderRadius: '8px',
  zIndex: 100,
  padding: '24px 24px 40px',
});

export const modalTitle = style({
  fontSize: '1.25rem',
  marginBottom: '12px',
});

export const buttonAreaContainer = style({
  display: 'flex',
  gap: '8px',
});

export const closeButtonContainer = style({
  position: 'absolute',
  top: '4px',
  right: '4px',
});

export const overlay = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
});
