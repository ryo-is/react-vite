import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const countAtom = atom({ count: 0 });
export const getCountValue = atom((get) => get(countAtom).count);

export const countAtomWithStorageAtom = atomWithStorage(
  'countAtomWithStorage',
  0
);
