import { style } from '@vanilla-extract/css';

import { vars } from '@/vars.css';

export const container = style({
  position: 'absolute',
  right: '24px',
  bottom: '24px',
});

export const floatButton = style({
  color: vars.color.primary,
  backgroundColor: `${vars.color.buttonBgColor} !important`,
  padding: '12px 24px',
  borderRadius: '24px',
  fontSize: '0.875rem',
});
