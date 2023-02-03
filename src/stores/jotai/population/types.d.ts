export type Prefecture = { prefCode: number; prefName: string };

export type Population = {
  label: string;
  data: Array<{ year: number; value: number }>;
};
