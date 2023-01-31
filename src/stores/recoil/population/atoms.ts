import { atom } from 'recoil';
import { PrefectureAtom, PopulationAtom } from './types';

export const prefectureAtom = atom<PrefectureAtom>({
  key: 'prefectures',
  default: {
    isLoading: false,
    prefectures: [],
    error: null,
  },
});

export const populationAtom = atom<PopulationAtom>({
  key: 'populations',
  default: {
    isLoading: false,
    populations: [],
    error: null,
  },
});
