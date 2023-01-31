import { useEffect } from 'react';
import {
  usePopulations,
  usePrefectures,
} from '../stores/recoil/population/selectors';
import {
  useFetchPopulations,
  useFetchPrefectures,
} from '../stores/recoil/population/operations';

export const Population = () => {
  const prefectures = usePrefectures();
  const populations = usePopulations();
  const fetchPrefectures = useFetchPrefectures();
  const fetchPopulations = useFetchPopulations();

  useEffect(() => {
    void (async () => {
      await fetchPrefectures();
      await fetchPopulations([
        { prefCode: 13, prefName: '東京都' },
        { prefCode: 1, prefName: '北海道' },
      ]);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex space-x-4">
      <div className="w-1/5">
        <div className="mb-4 flex justify-between items-center">
          <div>Prefectures</div>
          <button type="button" className="btn btn-info">
            clear all
          </button>
        </div>
        <div className="py-4 px-8 max-h-[80vh] flex flex-col flex-wrap border-2 border-zinc-500 w-full rounded-lg overflow-scroll">
          {!prefectures.isLoading ? (
            <>
              {prefectures.prefectures.map((p) => (
                <div
                  key={p.prefCode}
                  className="flex items-center space-x-2 my-1"
                >
                  <input
                    type="checkbox"
                    id={p.prefName}
                    className="checkbox checkbox-info border-zinc-400 hover:border-zinc-200 border-2"
                  />
                  <label
                    className="label-text cursor-pointer"
                    htmlFor={p.prefName}
                  >
                    {p.prefName}
                  </label>
                </div>
              ))}
            </>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
      <div className="w-4/5">
        {!populations.isLoading ? (
          <div>
            {populations.populations.map((p) => (
              <div>{p.label}</div>
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};
