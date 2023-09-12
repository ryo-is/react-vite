import { atom } from 'jotai';

import { Toast } from './types';

const initialToastAtom: Toast = { status: 'hidden', message: '' };
export const toastAtom = atom<Toast>(initialToastAtom);

export const useToast = atom(
  (get) => get(toastAtom),
  (_, set, toast: Toast) => {
    set(toastAtom, toast);
    setTimeout(() => set(toastAtom, initialToastAtom), 3000);
  },
);
