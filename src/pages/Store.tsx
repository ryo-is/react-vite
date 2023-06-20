import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAtom } from 'jotai';
import {
  useCountSelector,
  useCount2Selector,
  useSumCountSelector,
} from '../stores/recoil/count/selectors';
import { useCount, useCount2 } from '../stores/recoil/count/operations';
import { RootState } from '../stores/redux';
import { increment, decrement } from '../stores/redux/count/slice';
import { useCountValue, useCountSetValue } from '../contexts/count';
import {
  countAtom,
  count2Atom,
  getCountValue,
  getCount2Value,
  getDoubleCountValue,
  getSumCountValue,
  countAtomWithStorageAtom,
} from '../stores/jotai/count/atom';

export const Store = () => {
  // component
  const [count, setCount] = useState(0);

  // recoil
  const countByRecoil = useCountSelector();
  const count2ByRecoil = useCount2Selector();
  const countSetState = useCount();
  const count2SetState = useCount2();
  const sumCount = useSumCountSelector();

  // redux
  const { countByRedux } = useSelector((stete: RootState) => stete.count);
  const dispatch = useDispatch();

  // contexts
  const countByContext = useCountValue();
  const setCountByContext = useCountSetValue();

  // jotai
  const [, setCountByJotai] = useAtom(countAtom);
  const [, setCount2ByJotai] = useAtom(count2Atom);
  const [countValue] = useAtom(getCountValue);
  const [count2Value] = useAtom(getCount2Value);
  const [doubleCountValue] = useAtom(getDoubleCountValue);
  const [sumCountValue] = useAtom(getSumCountValue);
  const [countAtomWithStorage, setCountAtomWithStorage] = useAtom(
    countAtomWithStorageAtom
  );

  return (
    <>
      <div className="flex gap-x-8">
        <div className="my-2">
          <div className="mb-2">Component State</div>
          <button
            type="button"
            onClick={() => setCount((c) => c + 1)}
            className="btn-primary btn mr-2"
          >
            count up
          </button>
          <button
            type="button"
            onClick={() => setCount((c) => c - 1)}
            className="btn-primary btn"
          >
            count down
          </button>
          <div className="mt-2 text-lg">count is: {count}</div>
        </div>
        <div className="my-2">
          <div className="mb-2">Redux State</div>
          <button
            type="button"
            onClick={() => dispatch(increment(countByRecoil))}
            className="btn-warning btn mr-2"
          >
            count up
          </button>
          <button
            type="button"
            onClick={() => dispatch(decrement(countByRecoil))}
            className="btn-warning btn"
          >
            count down
          </button>
          <div className="mt-2 text-lg">count is: {countByRedux}</div>
        </div>
        <div className="my-2">
          <div className="mb-2">Context State</div>
          <button
            type="button"
            onClick={() => setCountByContext(countByContext + 1)}
            className="btn-error btn mr-2"
          >
            count up
          </button>
          <button
            type="button"
            onClick={() => setCountByContext(countByContext - 1)}
            className="btn-error btn"
          >
            count down
          </button>
          <div className="mt-2 text-lg">count is: {countByContext}</div>
        </div>
      </div>
      <div className="flex gap-x-8">
        <div className="my-2">
          <div className="mb-2">Recoil State</div>
          <div className="mb-2">
            <button
              type="button"
              onClick={() => countSetState({ count: countByRecoil + 1 })}
              className="btn-success btn mr-2"
            >
              count up
            </button>
            <button
              type="button"
              onClick={() => countSetState({ count: countByRecoil - 1 })}
              className="btn-success btn"
            >
              count down
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={() => count2SetState({ count: count2ByRecoil + 1 })}
              className="btn-success btn mr-2"
            >
              count2 up
            </button>
            <button
              type="button"
              onClick={() => count2SetState({ count: count2ByRecoil - 1 })}
              className="btn-success btn"
            >
              count2 down
            </button>
          </div>
          <div className="mt-2 text-lg">count is: {countByRecoil}</div>
          <div className="mt-2 text-lg">count2 is: {count2ByRecoil}</div>
          <div className="mt-2 text-lg">sum count is: {sumCount}</div>
        </div>
      </div>
      <div className="flex gap-x-8">
        <div className="my-2">
          <div className="mb-2">Jotai State</div>
          <div className="mb-2">
            <button
              type="button"
              onClick={() =>
                setCountByJotai((p) => ({
                  count: p.count + 1,
                }))
              }
              className="btn mr-2 bg-sky-600 hover:bg-sky-600"
            >
              count up
            </button>
            <button
              type="button"
              onClick={() =>
                setCountByJotai((p) => ({
                  count: p.count - 1,
                }))
              }
              className="btn bg-sky-600 hover:bg-sky-600"
            >
              count down
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={() =>
                setCount2ByJotai((p) => ({
                  count: p.count + 1,
                }))
              }
              className="btn mr-2 bg-sky-600 hover:bg-sky-600"
            >
              count2 up
            </button>
            <button
              type="button"
              onClick={() =>
                setCount2ByJotai((p) => ({
                  count: p.count - 1,
                }))
              }
              className="btn bg-sky-600 hover:bg-sky-600"
            >
              count2 down
            </button>
          </div>
          <div className="mt-1 text-lg">count is: {countValue}</div>
          <div className="mt-1 text-lg">count2 is: {count2Value}</div>
          <div className="mt-1 text-lg">
            double count is: {doubleCountValue}
          </div>
          <div className="mt-1 text-lg">sum count is: {sumCountValue}</div>
        </div>
        <div className="my-2">
          <div className="mb-2">Jotai State with LocalStorage</div>
          <button
            type="button"
            onClick={() => setCountAtomWithStorage((p) => p + 1)}
            className="btn mr-2 bg-violet-600 hover:bg-violet-600"
          >
            count up
          </button>
          <button
            type="button"
            onClick={() => setCountAtomWithStorage((p) => p - 1)}
            className="btn bg-violet-600 hover:bg-violet-600"
          >
            count down
          </button>
          <div className="mt-2 text-lg">count is: {countAtomWithStorage}</div>
        </div>
      </div>
    </>
  );
};
