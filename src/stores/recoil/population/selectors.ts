import { selector, useRecoilValue } from 'recoil';

import {
  populationAtom,
  prefectureAtom,
  selectedPrefectureAtom,
} from './atoms';
import type {
  PopulationAtom,
  PrefectureAtom,
  SelectedPrefectureAtom,
} from './types';

const prefecturesSelector = selector<PrefectureAtom>({
  key: 'prefectures_selector',
  get: ({ get }) => get(prefectureAtom),
});

export const usePrefectures = () => useRecoilValue(prefecturesSelector);

const selectedPrefecturesSelector = selector<SelectedPrefectureAtom>({
  key: 'selected_prefectures_selector',
  get: ({ get }) => get(selectedPrefectureAtom),
});

export const useSelectedPrefectures = () =>
  useRecoilValue(selectedPrefecturesSelector);

const populationsSelector = selector<PopulationAtom>({
  key: 'populations_selector',
  get: ({ get }) => get(populationAtom),
});

export const usePopulations = () => useRecoilValue(populationsSelector);

export const usePopulationSeries = () =>
  useRecoilValue(
    selector<
      {
        label: string;
        data: {
          year: number;
          value: number;
        }[];
      }[]
    >({
      key: 'population_for_chart',
      get: ({ get }) => {
        const { populations, isLoading } = get(populationAtom);
        if (isLoading) {
          return [];
        }
        return populations.map(({ label, data }) => ({
          label,
          data: data.map((d) => ({
            ...d,
          })),
        }));
      },
    }),
  );
