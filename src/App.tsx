import { useState } from 'react';
import { countSelectors } from './stores/recoil/count/selectors';
import { countOperations } from './stores/recoil/count/operations';

export const App = () => {
  const [count, setCount] = useState(0);

  const countByRecoil = countSelectors.useCountSelector();
  const countSetState = countOperations.useCountSetState();

  return (
    <div className="flex flex-col min-h-screen text-zinc-200 bg-zinc-800 p-6">
      <div className="my-2">
        <div className="mb-2">Component State</div>
        <button
          type="button"
          onClick={() => setCount((c) => c + 1)}
          className="btn btn-primary"
        >
          count up
        </button>
        <div className="mt-2">count is: {count}</div>
      </div>
      <div className="my-2">
        <div className="mb-2">Recoil State</div>
        <button
          type="button"
          onClick={() => countSetState({ count: countByRecoil + 1 })}
          className="btn btn-success"
        >
          count up
        </button>
        <div className="mt-2">count is: {countByRecoil}</div>
      </div>
    </div>
  );
};
