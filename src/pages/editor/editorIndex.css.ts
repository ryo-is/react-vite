import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  height: 'calc(100vh - 4rem)',
});
