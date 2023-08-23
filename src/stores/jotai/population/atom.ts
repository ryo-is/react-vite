import { atom } from 'jotai';
import { toastAtom } from '../toast/atom';
import { Population, Prefecture } from './types';
import { getPrefectures, getPopulations } from '../../../apis/fetch';

export const prefectureAtom = atom<Prefecture[]>([]);
export const selectedPrefectureAtom = atom<Prefecture[]>([]);
export const populationAtom = atom<Population[]>([]);

export const usePrefectures = atom(
  (get) => get(prefectureAtom),
  async (_, set) => {
    const { result, statusCode, message } = await getPrefectures();
    if (!statusCode) {
      set(prefectureAtom, result);
    } else {
      set(prefectureAtom, []);
      set(toastAtom, {
        status: 'error',
        message: message || '',
      });
    }
  },
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
  },
);

export const usePopulations = atom(
  (get) => get(populationAtom),
  async (get, set) => {
    const targetPrefs = get(selectedPrefectureAtom);
    if (targetPrefs.length <= 0) {
      set(populationAtom, () => []);
      return;
    }
    const populationJsons = await getPopulations(targetPrefs);
    const errorResult = populationJsons.find(
      (json) => json.statusCode !== undefined,
    );
    if (!errorResult) {
      const populations: Population[] = populationJsons.map((p, i) => ({
        ...p.result.data[0],
        label: targetPrefs[i].prefName,
      }));
      set(populationAtom, populations);
    } else {
      set(populationAtom, () => []);
      set(toastAtom, {
        status: 'error',
        message: errorResult.message || '',
      });
    }
  },
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

export const useClearSelectedPrefectures = atom(null, (_, set) => {
  set(selectedPrefectureAtom, []);
});
