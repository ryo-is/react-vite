import { style } from '@vanilla-extract/css';

import { vars } from '@/vars.css';

export const container = style({
  color: vars.color.base,
  backgroundColor: '#ffffff',
});

export const iframeContainer = style({
  width: '100%',
  height: '100%',
});
