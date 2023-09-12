import { selector, useRecoilValue } from 'recoil';

import { countAtom, count2Atom } from './atom';

const countSelector = selector<number>({
  key: 'count_selector',
  get: ({ get }) => get(countAtom).count,
});

export const useCountSelector = () => useRecoilValue(countSelector);

const countSelector2 = selector<number>({
  key: 'count_selector_2',
  get: ({ get }) => get(count2Atom).count,
});

export const useCount2Selector = () => useRecoilValue(countSelector2);

const sumCountSelector = selector<number>({
  key: 'sum_count_selector',
  get: ({ get }) => get(countAtom).count + get(count2Atom).count,
});

export const useSumCountSelector = () => useRecoilValue(sumCountSelector);
