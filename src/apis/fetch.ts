import { Prefecture } from '../stores/jotai/population/types';

export const getPrefectures = async (): Promise<{
  result: Prefecture[];
  statusCode?: number;
  message: string;
}> => {
  const res = await fetch(
    'https://opendata.resas-portal.go.jp/api/v1/prefectures',
    {
      headers: {
        'X-API-KEY': import.meta.env.VITE_API_KEY as string,
      },
    }
  );
  const resJson = (await res.json()) as {
    result: Prefecture[];
    statusCode?: number;
    message: string;
  };
  return resJson;
};

export const getPopulations = async (
  prefectures: Prefecture[]
): Promise<
  {
    result: {
      data: { data: { year: number; value: number }[] }[];
    };
    statusCode: number;
    message: string;
  }[]
> => {
  const promises = prefectures.map((pref) =>
    fetch(
      `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${pref.prefCode}`,
      {
        headers: {
          'X-API-KEY': import.meta.env.VITE_API_KEY as string,
        },
      }
    )
  );
  const results = await Promise.all(promises);
  const toJsonPromises = results.map((r) => r.json());
  const populationJsons = await Promise.all<{
    result: {
      data: { data: { year: number; value: number }[] }[];
    };
    statusCode: number;
    message: string;
  }>(toJsonPromises);
  return populationJsons;
};
