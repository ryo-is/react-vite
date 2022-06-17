import { atom } from 'recoil';
import { InitialState } from './types';

const initialState: InitialState = {
  count: 0,
};

export const countAtom = atom<InitialState>({
  key: 'count_atom',
  default: initialState,
});
