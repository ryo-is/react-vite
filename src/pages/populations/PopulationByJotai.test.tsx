import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'jotai';
import { useHydrateAtoms } from 'jotai/utils';
import type { ReactNode } from 'react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

import { PopulationByJotai } from './PopulationByJotai';
import * as Fetch from '../../apis/fetch';
import {
  mockGetPopulationsResponse,
  mockGetPrefecturesResponse,
} from '../../helper/mockResponses';
import {
  populationAtom,
  prefectureAtom,
  selectedPrefectureAtom,
} from '../../stores/jotai/population/atom';
import type {
  Population,
  Prefecture,
} from '../../stores/jotai/population/types';

const user = userEvent.setup();

type ProviderProps = {
  initialValues: Array<
    | [typeof prefectureAtom, Prefecture[]]
    | [typeof populationAtom, Population[]]
  >;
  children: ReactNode;
};

const HydrateAtoms = ({ initialValues, children }: ProviderProps) => {
  useHydrateAtoms(initialValues);
  return children;
};

const TestProvider = ({ initialValues, children }: ProviderProps) => (
  <Provider>
    <HydrateAtoms initialValues={initialValues}>{children}</HydrateAtoms>
  </Provider>
);

const initialValues: ProviderProps['initialValues'] = [
  [prefectureAtom, []],
  [selectedPrefectureAtom, []],
  [populationAtom, []],
];

const ToastProvider = () => (
  <TestProvider initialValues={initialValues}>
    <PopulationByJotai />
  </TestProvider>
);

describe('PopulationByJotai', () => {
  beforeEach(() => {
    vi.mock('recharts');
    vi.spyOn(Fetch, 'getPrefectures').mockResolvedValue(
      mockGetPrefecturesResponse,
    );
    vi.spyOn(Fetch, 'getPopulations').mockResolvedValue([
      mockGetPopulationsResponse,
    ]);
  });

  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  test('should match to the snapshot', async () => {
    const { asFragment } = await waitFor(() => render(<ToastProvider />));
    expect(asFragment()).toMatchSnapshot();
  });

  test('should call getPrefectures when rendering', async () => {
    await waitFor(() => render(<ToastProvider />));

    expect(Fetch.getPrefectures).toHaveBeenCalled();
  });

  test('should get population when select prefecture', async () => {
    await waitFor(() => render(<ToastProvider />));
    screen.debug();
    const cb = screen.getByRole('checkbox', { name: '北海道' });
    await user.click(cb);

    expect(Fetch.getPopulations).toHaveBeenCalledWith([
      {
        prefCode: 1,
        prefName: '北海道',
      },
    ]);
  });
});
