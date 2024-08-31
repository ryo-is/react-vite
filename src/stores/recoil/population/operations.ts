import { useRecoilCallback } from 'recoil';

import {
  populationAtom,
  prefectureAtom,
  selectedPrefectureAtom,
} from './atoms';
import type { Population, Prefecture } from './types';

export const useFetchPrefectures = () =>
  useRecoilCallback(({ set }) => async () => {
    set(prefectureAtom, (prev) => ({ ...prev, isLoading: true }));
    const res = await fetch(
      'https://opendata.resas-portal.go.jp/api/v1/prefectures',
      {
        headers: {
          'X-API-KEY': import.meta.env.VITE_API_KEY as string,
        },
      },
    );
    const { result, statusCode, message } = (await res.json()) as {
      result: Prefecture[];
      statusCode?: number;
      message: string;
    };
    if (!statusCode) {
      set(prefectureAtom, () => ({
        isLoading: false,
        prefectures: result,
        error: null,
      }));
    } else {
      set(prefectureAtom, (prev) => ({
        ...prev,
        isLoading: false,
        prefectures: [],
        error: new Error(message),
      }));
    }
  });

export const useFetchPopulations = () =>
  useRecoilCallback(({ set }) => async (prefectures: Prefecture[]) => {
    set(populationAtom, (prev) => ({ ...prev, isLoading: true }));
    if (prefectures.length <= 0) {
      return;
    }
    const promises = prefectures.map((pref) =>
      fetch(
        `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${pref.prefCode}`,
        {
          headers: {
            'X-API-KEY': import.meta.env.VITE_API_KEY as string,
          },
        },
      ),
    );
    const results = await Promise.all(promises);
    const toJsonPromises = results.map((r) => r.json());
    const populationJsons = await Promise.all<{
      result: {
        data: { data: { year: number; value: number }[] }[];
      };
      statusCode: number;
      message: string;
    }>(toJsonPromises);
    const errorResult = populationJsons.find(
      (json) => json.statusCode !== undefined,
    );
    if (!errorResult) {
      const populations: Population[] = populationJsons.map((p, i) => ({
        ...p.result.data[0],
        label: prefectures[i].prefName,
      }));
      set(populationAtom, {
        isLoading: false,
        populations,
        error: null,
      });
    } else {
      set(populationAtom, (prev) => ({
        ...prev,
        isLoading: false,
        populations: [],
        error: new Error(errorResult.message),
      }));
    }
  });

export const useOperationSelectedPrefecture = () =>
  useRecoilCallback(({ set }) => (checked: boolean, pref: Prefecture) => {
    if (checked) {
      set(selectedPrefectureAtom, (prev) => [...prev, pref]);
    } else {
      set(selectedPrefectureAtom, (prev) => {
        const prevPref = [...prev];
        const idx = prevPref.findIndex((p) => p.prefCode === pref.prefCode);
        if (idx >= 0) {
          prevPref.splice(idx, 1);
        }
        return prevPref;
      });
    }
  });
