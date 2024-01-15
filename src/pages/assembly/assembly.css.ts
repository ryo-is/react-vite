import { style } from '@vanilla-extract/css';

import { vars } from '@/vars.css';

export const container = style({
  marginBottom: '12px',
  padding: '16px',
  border: '2px solid',
  borderColor: vars.color.primary,
  borderRadius: '12px',
});

export const title = style({
  fontSize: '1.25rem',
  fontWeight: 500,
  marginBottom: '16px',
  borderLeft: '8px solid',
  borderBottom: '2px solid',
  borderColor: vars.color.primary,
  paddingLeft: '12px',
});

export const inputWrapper = style({
  display: 'flex',
  alignItems: 'center',
  columnGap: '12px',
  marginBottom: '12px',
});

export const input = style({
  color: vars.color.base,
  padding: '2px 8px',
});

export const button = style({
  backgroundColor: `${vars.color.secondary} !important`,
  color: vars.color.base,
  padding: '6px 24px',
  borderRadius: '6px',
  width: 'fit-content',
  ':active': {
    backgroundColor: '#a1a1aa !important',
  },
});

export const resultNumber = style({
  fontSize: '1.25rem',
  fontWeight: 500,
});

export const joinTextInputWrapper = style({
  display: 'grid',
  gridTemplateColumns: '120px 240px',
  marginBottom: '12px',
});
