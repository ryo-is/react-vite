import { useRecoilCallback } from 'recoil';
import { populationAtom, prefectureAtom } from './atoms';
import { Population, Prefecture } from './types';

export const useFetchPrefectures = () =>
  useRecoilCallback(({ set }) => async () => {
    set(prefectureAtom, (prev) => ({ ...prev, isLoading: true }));
    try {
      const res = await fetch(
        'https://opendata.resas-portal.go.jp/api/v1/prefectures',
        {
          headers: {
            'X-API-KEY': import.meta.env.VITE_API_KEY as string,
          },
        }
      );
      const { result } = (await res.json()) as { result: Prefecture[] };
      set(prefectureAtom, () => ({
        isLoading: false,
        prefectures: result,
        error: null,
      }));
    } catch (e) {
      set(prefectureAtom, (prev) => ({
        ...prev,
        isLoading: false,
        prefectures: [],
        error: e as Error,
      }));
    }
  });

export const useFetchPopulations = () =>
  useRecoilCallback(({ set }) => async (prefectures: Prefecture[]) => {
    set(populationAtom, (prev) => ({ ...prev, isLoading: true }));
    try {
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
          }
        )
      );
      const results = await Promise.all(promises);
      const toJsonPromises = results.map((r) => r.json());
      const populationJsons = await Promise.all<{
        result: {
          data: { data: { year: number; value: number }[] }[];
        };
      }>(toJsonPromises);
      const populations: Population[] = populationJsons.map((p, i) => ({
        ...p.result.data[0],
        label: prefectures[i].prefName,
      }));
      set(populationAtom, {
        isLoading: false,
        populations,
        error: null,
      });
    } catch (e) {
      set(populationAtom, (prev) => ({
        ...prev,
        isLoading: false,
        prefectures: [],
        error: e as Error,
      }));
    }
  });
