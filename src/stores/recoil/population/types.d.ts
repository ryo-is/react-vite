export type Prefecture = { prefCode: number; prefName: string };

export type PrefectureAtom = {
  isLoading: boolean;
  prefectures: Prefecture[];
  error: Error | null;
};

export type Population = {
  label: string;
  data: Array<{ year: number; value: number }>;
};

export type PopulationAtom = {
  isLoading: boolean;
  populations: Population[];
  error: Error | null;
};
