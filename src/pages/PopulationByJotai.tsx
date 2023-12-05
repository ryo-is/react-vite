/* eslint-disable react-hooks/exhaustive-deps */
import { useAtom, useSetAtom } from 'jotai';
import { useEffect } from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import {
  useClearSelectedPrefectures,
  usePopulations,
  usePopulationSeries,
  usePrefectures,
  useSelectedPrefectures,
} from '../stores/jotai/population/atom';
import { Prefecture } from '../stores/jotai/population/types';
import { useToast } from '../stores/jotai/toast/atom';

const lineColors = [
  '#b33dc6',
  '#27aeef',
  '#87bc45',
  '#bdcf32',
  '#ede15b',
  '#edbf33',
  '#ef9b20',
  '#f46a9b',
  '#ea5545',
];
const getStrokeColor = (index: number) =>
  lineColors[(index + 1) % lineColors.length];

export const PopulationByJotai = () => {
  const [prefectures, fetchPrefectures] = useAtom(usePrefectures);
  const [selectedPrefectures, setSelectedPrefectures] = useAtom(
    useSelectedPrefectures,
  );
  const fetchPopulations = useSetAtom(usePopulations);
  const [series] = useAtom(usePopulationSeries);
  const clearSelectedPrefectures = useSetAtom(useClearSelectedPrefectures);
  const setToast = useSetAtom(useToast);

  const isChecked = (code: number) => {
    const idx = selectedPrefectures.findIndex((p) => p.prefCode === code);
    return idx >= 0;
  };

  const handleOnChange = (checked: boolean, pref: Prefecture) => {
    setSelectedPrefectures({ checked, pref });
  };

  const handleOnClear = () => {
    clearSelectedPrefectures();
    setToast({ message: 'done clear all', status: 'info' });
  };

  useEffect(() => {
    void (async () => {
      await fetchPrefectures();
    })();
  }, []);

  useEffect(() => {
    void (async () => {
      await fetchPopulations();
    })();
  }, [selectedPrefectures]);

  return (
    <div className="flex space-x-4">
      <div className="w-1/5">
        <div className="mb-4 flex items-center justify-between">
          <div>Prefectures</div>
          <button
            type="button"
            className="btn btn-info"
            onClick={() => handleOnClear()}
          >
            clear all
          </button>
        </div>
        <div className="flex max-h-[80vh] w-full flex-col overflow-scroll rounded-lg border-2 border-zinc-500 p-4">
          {prefectures.length > 0 ? (
            <>
              {prefectures.map((p) => (
                <div
                  key={p.prefCode}
                  className="my-1 flex items-center space-x-2"
                >
                  <input
                    type="checkbox"
                    id={p.prefName}
                    className="hidden"
                    checked={isChecked(p.prefCode)}
                    onChange={(e) => handleOnChange(e.target.checked, p)}
                  />
                  <label
                    className={`${
                      isChecked(p.prefCode)
                        ? 'border-zinc-400 bg-zinc-300 text-zinc-800'
                        : 'border-zinc-500'
                    } label-text w-full cursor-pointer  rounded-md border-2 p-4 first:mt-0`}
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
        {series.length > 0 ? (
          <ResponsiveContainer
            width="100%"
            height="100%"
            className="text-zinc-700"
          >
            <LineChart
              width={500}
              height={300}
              margin={{
                top: 5,
                right: 30,
                left: 50,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.5} />
              <XAxis
                dataKey="year"
                type="category"
                allowDuplicatedCategory={false}
                stroke="#e4e4e7"
              />
              <YAxis stroke="#e4e4e7" />
              <Tooltip />
              <Legend />
              {series.map((s, i) => (
                <Line
                  key={s.label}
                  type="monotone"
                  data={s.data}
                  name={s.label}
                  dataKey="value"
                  strokeWidth={4}
                  stroke={getStrokeColor(i)}
                  dot={{ r: 4, fill: getStrokeColor(i) }}
                  activeDot={{ r: 8 }}
                  animationDuration={500}
                  animationEasing="ease-in-out"
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="p-4">Please select prefecture.</div>
        )}
      </div>
    </div>
  );
};
