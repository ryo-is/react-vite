import type { Prefecture } from '../stores/jotai/population/types';

type GetPrefecturesResponse = {
  result: Prefecture[];
  statusCode?: number;
  message: string | null;
};
export const getPrefectures = async (): Promise<GetPrefecturesResponse> => {
  const res = await fetch(
    'https://opendata.resas-portal.go.jp/api/v1/prefectures',
    {
      headers: {
        'X-API-KEY': import.meta.env.VITE_API_KEY as string,
      },
    },
  );
  const resJson = (await res.json()) as GetPrefecturesResponse;
  return resJson;
};

type GetPopulationsResponse = {
  result: {
    boundaryYear: number;
    data: (
      | {
          label: string;
          data: {
            year: number;
            value: number;
          }[];
        }
      | {
          label: string;
          data: {
            year: number;
            value: number;
            rate: number;
          }[];
        }
    )[];
  };
  statusCode?: number;
  message: string | null;
};

export const getPopulations = async (
  prefectures: Prefecture[],
): Promise<GetPopulationsResponse[]> => {
  const promises = prefectures.map((pref) =>
    fetch(
      `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${pref.prefCode}`,
      {
        headers: {
          'X-API-KEY': import.meta.env.VITE_API_KEY as string,
        },
      },
    ),
  );
  const results = await Promise.all(promises);
  const toJsonPromises = results.map((r) => r.json());
  const populationJsons =
    await Promise.all<GetPopulationsResponse>(toJsonPromises);
  return populationJsons;
};
