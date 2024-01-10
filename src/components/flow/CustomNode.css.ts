import { style } from '@vanilla-extract/css';

import { vars } from '@/vars.css';

export const customNode = style({
  borderRadius: '0.5rem',
  border: '3px solid',
  borderColor: vars.color.primary,
  backgroundColor: vars.color.base,
  padding: '1rem 3rem',
});

const nodeHandler = style({
  height: '1rem !important',
  width: '1rem !important',
  border: '3px solid !important',
  borderColor: vars.color.primary,
});

export const nodeTargetHundler = style([
  nodeHandler,
  {
    left: '-8px !important',
  },
]);

export const nodeSourceHundler = style([
  nodeHandler,
  {
    right: '-8px !important',
  },
]);

export const innerHandlerWrapper = style({
  pointerEvents: 'none',
  height: '100%',
  width: '100%',
  borderRadius: '100%',
  backgroundColor: vars.color.base,
  padding: '3px',
});

export const innerHandler = style({
  height: '100%',
  width: '100%',
  borderRadius: '100%',
  backgroundColor: vars.color.primary,
});
