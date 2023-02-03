import { atom } from 'jotai';
import { Population, Prefecture } from './types';

export const prefectureAtom = atom<Prefecture[]>([]);
export const selectedPrefectureAtom = atom<Prefecture[]>([]);
export const populationAtom = atom<Population[]>([]);

export const usePrefectures = atom(
  (get) => get(prefectureAtom),
  async (_, set) => {
    const res = await fetch(
      'https://opendata.resas-portal.go.jp/api/v1/prefectures',
      {
        headers: {
          'X-API-KEY': import.meta.env.VITE_API_KEY as string,
        },
      }
    );
    const { result, statusCode } = (await res.json()) as {
      result: Prefecture[];
      statusCode?: number;
      message: string;
    };
    if (!statusCode) {
      set(prefectureAtom, result);
    } else {
      set(prefectureAtom, []);
    }
  }
);

export const useSelectedPrefectures = atom(
  (get) => get(selectedPrefectureAtom),
  (_, set, { checked, pref }: { checked: boolean; pref: Prefecture }) => {
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
  }
);

export const usePopulations = atom(
  (get) => get(populationAtom),
  async (get, set) => {
    const targetPrefs = get(selectedPrefectureAtom);
    if (targetPrefs.length <= 0) {
      set(populationAtom, () => []);
    }
    const promises = targetPrefs.map((pref) =>
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
      statusCode: number;
      message: string;
    }>(toJsonPromises);
    const errorResult = populationJsons.find(
      (json) => json.statusCode !== undefined
    );
    if (!errorResult) {
      const populations: Population[] = populationJsons.map((p, i) => ({
        ...p.result.data[0],
        label: targetPrefs[i].prefName,
      }));
      set(populationAtom, populations);
    } else {
      set(populationAtom, () => []);
    }
  }
);

export const usePopulationSeries = atom((get) => {
  const populations = get(populationAtom);
  return populations.map(({ label, data }) => ({
    label,
    data: data.map((d) => ({
      ...d,
    })),
  }));
});
