import { atom } from 'recoil';
import {
  PrefectureAtom,
  SelectedPrefectureAtom,
  PopulationAtom,
} from './types';

export const prefectureAtom = atom<PrefectureAtom>({
  key: 'prefectures',
  default: {
    isLoading: false,
    prefectures: [],
    error: null,
  },
});

export const selectedPrefectureAtom = atom<SelectedPrefectureAtom>({
  key: 'selected_prefecture',
  default: [],
});

export const populationAtom = atom<PopulationAtom>({
  key: 'populations',
  default: {
    isLoading: false,
    populations: [],
    error: null,
  },
});
