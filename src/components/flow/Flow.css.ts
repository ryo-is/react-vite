import { style } from '@vanilla-extract/css';

import { vars } from '@/vars.css';

export const container = style({
  height: 'calc(100vh - 4rem)',
});

export const controlArea = style({
  position: 'absolute',
  bottom: '1rem',
  left: '1rem',
  zIndex: 50,
  display: 'flex',
  columnGap: '0.5rem',
});

export const controlButton = style({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '0.5rem',
  padding: '0.5rem',
  ':hover': {
    backgroundColor: vars.color.primary,
    fontWeight: 'bold',
    color: vars.color.base,
  },
});

export const controlButtonIcon = style({
  height: '1.25rem',
  width: '1.25rem',
});
