import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { countSelectors } from './stores/recoil/count/selectors';
import { countOperations } from './stores/recoil/count/operations';
import { RootState } from './stores/redux';
import { increment, decrement } from './stores/redux/count/slice';
import { useCountValue, useCountSetValue } from './contexts/count';

export const App = () => {
  // component
  const [count, setCount] = useState(0);

  // recoil
  const countByRecoil = countSelectors.useCountSelector();
  const countSetState = countOperations.useCountSetState();

  // redux
  const { countByRedux } = useSelector((stete: RootState) => stete.count);
  const dispatch = useDispatch();

  // contexts
  const countByContext = useCountValue();
  const setCountByContext = useCountSetValue();

  return (
    <div className="flex gap-x-8 min-h-screen text-zinc-200 bg-base-100 p-6">
      <div className="my-2">
        <div className="mb-2">Component State</div>
        <button
          type="button"
          onClick={() => setCount((c) => c + 1)}
          className="btn btn-primary mr-2"
        >
          count up
        </button>
        <button
          type="button"
          onClick={() => setCount((c) => c - 1)}
          className="btn btn-primary"
        >
          count down
        </button>
        <div className="mt-2 text-lg">count is: {count}</div>
      </div>
      <div className="my-2">
        <div className="mb-2">Recoil State</div>
        <button
          type="button"
          onClick={() => countSetState({ count: countByRecoil + 1 })}
          className="btn btn-success mr-2"
        >
          count up
        </button>
        <button
          type="button"
          onClick={() => countSetState({ count: countByRecoil - 1 })}
          className="btn btn-success"
        >
          count down
        </button>
        <div className="mt-2 text-lg">count is: {countByRecoil}</div>
      </div>
      <div className="my-2">
        <div className="mb-2">Redux State</div>
        <button
          type="button"
          onClick={() => dispatch(increment(countByRecoil))}
          className="btn btn-warning mr-2"
        >
          count up
        </button>
        <button
          type="button"
          onClick={() => dispatch(decrement(countByRecoil))}
          className="btn btn-warning"
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
          className="btn btn-error mr-2"
        >
          count up
        </button>
        <button
          type="button"
          onClick={() => setCountByContext(countByContext - 1)}
          className="btn btn-error"
        >
          count down
        </button>
        <div className="mt-2 text-lg">count is: {countByContext}</div>
      </div>
    </div>
  );
};
