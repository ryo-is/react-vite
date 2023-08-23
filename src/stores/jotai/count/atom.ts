import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const countAtom = atom({ count: 0 });
export const count2Atom = atom({ count: 0 });
export const getCountValue = atom((get) => get(countAtom).count);
export const getCount2Value = atom((get) => get(count2Atom).count);
export const getDoubleCountValue = atom((get) => get(countAtom).count * 2);
export const getSumCountValue = atom(
  (get) => get(countAtom).count + get(count2Atom).count,
);

export const countAtomWithStorageAtom = atomWithStorage(
  'countAtomWithStorage',
  0,
);
