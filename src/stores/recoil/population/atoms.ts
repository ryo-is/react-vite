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
  default: [
    { prefCode: 13, prefName: '東京都' },
    { prefCode: 1, prefName: '北海道' },
  ],
});

export const populationAtom = atom<PopulationAtom>({
  key: 'populations',
  default: {
    isLoading: false,
    populations: [],
    error: null,
  },
});
