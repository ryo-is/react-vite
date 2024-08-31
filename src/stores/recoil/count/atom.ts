import { atom } from 'recoil';

import type { InitialState } from './types';

const initialState: InitialState = {
  count: 0,
};

export const countAtom = atom<InitialState>({
  key: 'count_atom',
  default: initialState,
});

export const count2Atom = atom<InitialState>({
  key: 'count_2_atom',
  default: initialState,
});
