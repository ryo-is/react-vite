import { useSetRecoilState } from 'recoil';
import { countAtom } from './atom';

export const countOperations = {
  useCountSetState: () => useSetRecoilState(countAtom),
};
