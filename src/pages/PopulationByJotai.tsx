/* eslint-disable react-hooks/exhaustive-deps */
import { useAtom } from 'jotai';
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
  usePopulations,
  usePopulationSeries,
  usePrefectures,
  useSelectedPrefectures,
} from '../stores/jotai/population/atom';
import { Prefecture } from '../stores/jotai/population/types';

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
    useSelectedPrefectures
  );
  const [, fetchPopulations] = useAtom(usePopulations);
  const [series] = useAtom(usePopulationSeries);

  const isChecked = (code: number) => {
    const idx = selectedPrefectures.findIndex((p) => p.prefCode === code);
    return idx >= 0;
  };

  const handleOnChange = (checked: boolean, pref: Prefecture) => {
    setSelectedPrefectures({ checked, pref });
  };

  useEffect(() => {
    void (async () => {
      await fetchPrefectures();
    })();
  }, []);

  useEffect(() => {
    void (async () => {
      await fetchPopulations(selectedPrefectures);
    })();
  }, [selectedPrefectures]);

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
          {prefectures.length > 0 ? (
            <>
              {prefectures.map((p) => (
                <div
                  key={p.prefCode}
                  className="flex items-center space-x-2 my-1"
                >
                  <input
                    type="checkbox"
                    id={p.prefName}
                    className="checkbox checkbox-info border-zinc-400 hover:border-zinc-200 border-2"
                    checked={isChecked(p.prefCode)}
                    onChange={(e) => handleOnChange(e.target.checked, p)}
                  />
                  <label
                    className="label-text cursor-pointer text-zinc-200"
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