import { useState } from 'react';

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col min-h-screen text-zinc-200 bg-zinc-800 p-6">
      <p>
        <button
          type="button"
          onClick={() => setCount((c) => c + 1)}
          className="btn"
        >
          count up
        </button>
        <div>count is: {count}</div>
      </p>
    </div>
  );
};
