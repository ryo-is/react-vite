import { useSetRecoilState } from 'recoil';

import { countAtom, count2Atom } from './atom';

const countOperations = {
  useCountSetState: () => useSetRecoilState(countAtom),
};
export const useCount = countOperations.useCountSetState;

const count2Operations = {
  useCountSetState: () => useSetRecoilState(count2Atom),
};
export const useCount2 = count2Operations.useCountSetState;
