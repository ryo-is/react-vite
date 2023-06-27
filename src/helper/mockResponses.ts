export const mockGetPrefecturesResponse = {
  message: null,
  result: [
    {
      prefCode: 1,
      prefName: '北海道',
    },
    {
      prefCode: 2,
      prefName: '青森県',
    },
    {
      prefCode: 3,
      prefName: '岩手県',
    },
    {
      prefCode: 4,
      prefName: '宮城県',
    },
    {
      prefCode: 5,
      prefName: '秋田県',
    },
    {
      prefCode: 6,
      prefName: '山形県',
    },
    {
      prefCode: 7,
      prefName: '福島県',
    },
    {
      prefCode: 8,
      prefName: '茨城県',
    },
    {
      prefCode: 9,
      prefName: '栃木県',
    },
    {
      prefCode: 10,
      prefName: '群馬県',
    },
    {
      prefCode: 11,
      prefName: '埼玉県',
    },
    {
      prefCode: 12,
      prefName: '千葉県',
    },
    {
      prefCode: 13,
      prefName: '東京都',
    },
    {
      prefCode: 14,
      prefName: '神奈川県',
    },
    {
      prefCode: 15,
      prefName: '新潟県',
    },
    {
      prefCode: 16,
      prefName: '富山県',
    },
    {
      prefCode: 17,
      prefName: '石川県',
    },
    {
      prefCode: 18,
      prefName: '福井県',
    },
    {
      prefCode: 19,
      prefName: '山梨県',
    },
    {
      prefCode: 20,
      prefName: '長野県',
    },
    {
      prefCode: 21,
      prefName: '岐阜県',
    },
    {
      prefCode: 22,
      prefName: '静岡県',
    },
    {
      prefCode: 23,
      prefName: '愛知県',
    },
    {
      prefCode: 24,
      prefName: '三重県',
    },
    {
      prefCode: 25,
      prefName: '滋賀県',
    },
    {
      prefCode: 26,
      prefName: '京都府',
    },
    {
      prefCode: 27,
      prefName: '大阪府',
    },
    {
      prefCode: 28,
      prefName: '兵庫県',
    },
    {
      prefCode: 29,
      prefName: '奈良県',
    },
    {
      prefCode: 30,
      prefName: '和歌山県',
    },
    {
      prefCode: 31,
      prefName: '鳥取県',
    },
    {
      prefCode: 32,
      prefName: '島根県',
    },
    {
      prefCode: 33,
      prefName: '岡山県',
    },
    {
      prefCode: 34,
      prefName: '広島県',
    },
    {
      prefCode: 35,
      prefName: '山口県',
    },
    {
      prefCode: 36,
      prefName: '徳島県',
    },
    {
      prefCode: 37,
      prefName: '香川県',
    },
    {
      prefCode: 38,
      prefName: '愛媛県',
    },
    {
      prefCode: 39,
      prefName: '高知県',
    },
    {
      prefCode: 40,
      prefName: '福岡県',
    },
    {
      prefCode: 41,
      prefName: '佐賀県',
    },
    {
      prefCode: 42,
      prefName: '長崎県',
    },
    {
      prefCode: 43,
      prefName: '熊本県',
    },
    {
      prefCode: 44,
      prefName: '大分県',
    },
    {
      prefCode: 45,
      prefName: '宮崎県',
    },
    {
      prefCode: 46,
      prefName: '鹿児島県',
    },
    {
      prefCode: 47,
      prefName: '沖縄県',
    },
  ],
};

export const mockGetPopulationsResponse: {
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
} = {
  message: null,
  result: {
    boundaryYear: 2020,
    data: [
      {
        label: '総人口',
        data: [
          {
            year: 1960,
            value: 5039206,
          },
          {
            year: 1965,
            value: 5171800,
          },
          {
            year: 1970,
            value: 5184287,
          },
          {
            year: 1975,
            value: 5338206,
          },
          {
            year: 1980,
            value: 5575989,
          },
          {
            year: 1985,
            value: 5679439,
          },
          {
            year: 1990,
            value: 5643647,
          },
          {
            year: 1995,
            value: 5692321,
          },
          {
            year: 2000,
            value: 5683062,
          },
          {
            year: 2005,
            value: 5627737,
          },
          {
            year: 2010,
            value: 5506419,
          },
          {
            year: 2015,
            value: 5381733,
          },
          {
            year: 2020,
            value: 5224614,
          },
          {
            year: 2025,
            value: 5016554,
          },
          {
            year: 2030,
            value: 4791592,
          },
          {
            year: 2035,
            value: 4546357,
          },
          {
            year: 2040,
            value: 4280427,
          },
          {
            year: 2045,
            value: 4004973,
          },
        ],
      },
      {
        label: '年少人口',
        data: [
          {
            year: 1960,
            value: 1681479,
            rate: 33.3,
          },
          {
            year: 1965,
            value: 1462123,
            rate: 28.2,
          },
          {
            year: 1970,
            value: 1309487,
            rate: 25.2,
          },
          {
            year: 1975,
            value: 1312611,
            rate: 24.5,
          },
          {
            year: 1980,
            value: 1298324,
            rate: 23.2,
          },
          {
            year: 1985,
            value: 1217959,
            rate: 21.4,
          },
          {
            year: 1990,
            value: 1034251,
            rate: 18.3,
          },
          {
            year: 1995,
            value: 898673,
            rate: 15.7,
          },
          {
            year: 2000,
            value: 792352,
            rate: 13.9,
          },
          {
            year: 2005,
            value: 719057,
            rate: 12.7,
          },
          {
            year: 2010,
            value: 657312,
            rate: 11.9,
          },
          {
            year: 2015,
            value: 608296,
            rate: 11.3,
          },
          {
            year: 2020,
            value: 555804,
            rate: 10.6,
          },
          {
            year: 2025,
            value: 511677,
            rate: 10.1,
          },
          {
            year: 2030,
            value: 465307,
            rate: 9.7,
          },
          {
            year: 2035,
            value: 423382,
            rate: 9.3,
          },
          {
            year: 2040,
            value: 391086,
            rate: 9.1,
          },
          {
            year: 2045,
            value: 360177,
            rate: 8.9,
          },
        ],
      },
      {
        label: '生産年齢人口',
        data: [
          {
            year: 1960,
            value: 3145664,
            rate: 62.4,
          },
          {
            year: 1965,
            value: 3460359,
            rate: 66.9,
          },
          {
            year: 1970,
            value: 3575731,
            rate: 68.9,
          },
          {
            year: 1975,
            value: 3657884,
            rate: 68.5,
          },
          {
            year: 1980,
            value: 3823808,
            rate: 68.5,
          },
          {
            year: 1985,
            value: 3910729,
            rate: 68.8,
          },
          {
            year: 1990,
            value: 3924717,
            rate: 69.5,
          },
          {
            year: 1995,
            value: 3942868,
            rate: 69.2,
          },
          {
            year: 2000,
            value: 3832902,
            rate: 67.4,
          },
          {
            year: 2005,
            value: 3696064,
            rate: 65.6,
          },
          {
            year: 2010,
            value: 3482169,
            rate: 63.2,
          },
          {
            year: 2015,
            value: 3190804,
            rate: 59.2,
          },
          {
            year: 2020,
            value: 2945727,
            rate: 56.3,
          },
          {
            year: 2025,
            value: 2781175,
            rate: 55.4,
          },
          {
            year: 2030,
            value: 2594718,
            rate: 54.1,
          },
          {
            year: 2035,
            value: 2394230,
            rate: 52.6,
          },
          {
            year: 2040,
            value: 2140781,
            rate: 50,
          },
          {
            year: 2045,
            value: 1931265,
            rate: 48.2,
          },
        ],
      },
      {
        label: '老年人口',
        data: [
          {
            year: 1960,
            value: 212063,
            rate: 4.2,
          },
          {
            year: 1965,
            value: 249318,
            rate: 4.8,
          },
          {
            year: 1970,
            value: 299069,
            rate: 5.7,
          },
          {
            year: 1975,
            value: 366651,
            rate: 6.8,
          },
          {
            year: 1980,
            value: 451727,
            rate: 8.1,
          },
          {
            year: 1985,
            value: 549487,
            rate: 9.6,
          },
          {
            year: 1990,
            value: 674881,
            rate: 11.9,
          },
          {
            year: 1995,
            value: 844927,
            rate: 14.8,
          },
          {
            year: 2000,
            value: 1031552,
            rate: 18.1,
          },
          {
            year: 2005,
            value: 1205692,
            rate: 21.4,
          },
          {
            year: 2010,
            value: 1358068,
            rate: 24.6,
          },
          {
            year: 2015,
            value: 1558387,
            rate: 28.9,
          },
          {
            year: 2020,
            value: 1664023,
            rate: 31.8,
          },
          {
            year: 2025,
            value: 1723702,
            rate: 34.3,
          },
          {
            year: 2030,
            value: 1731567,
            rate: 36.1,
          },
          {
            year: 2035,
            value: 1728745,
            rate: 38,
          },
          {
            year: 2040,
            value: 1748560,
            rate: 40.8,
          },
          {
            year: 2045,
            value: 1713531,
            rate: 42.7,
          },
        ],
      },
    ],
  },
};
