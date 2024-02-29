import { style } from '@vanilla-extract/css';

import { vars } from '@/vars.css';

export const textAndIconButton = style({
  padding: '48px 54px',
  border: `2px solid ${vars.color.base}`,
  borderRadius: '8px',
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  ':hover': {
    backgroundColor: `${vars.color.base} !important`,
    color: vars.color.primary,
  },
});

export const textAndIconButtonIcon = style({
  width: '24px',
  height: '24px',
});
