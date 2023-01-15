import { atom } from 'jotai';

export const countAtom = atom({ count: 0 });
export const getCountValue = atom((get) => get(countAtom).count);
