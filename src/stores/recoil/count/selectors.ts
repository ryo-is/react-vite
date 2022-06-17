import { selector, useRecoilValue } from 'recoil';
import { countAtom } from './atom';

const countSelector = selector<number>({
  key: 'count_selector',
  get: ({ get }) => get(countAtom).count,
});

export const countSelectors = {
  useCountSelector: () => useRecoilValue(countSelector),
};
