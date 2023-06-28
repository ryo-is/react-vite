import { useHydrateAtoms } from 'jotai/utils';
import { Provider } from 'jotai';
import { ReactNode } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import {
  populationAtom,
  prefectureAtom,
  selectedPrefectureAtom,
} from '../stores/jotai/population/atom';
import { PopulationByJotai } from './PopulationByJotai';
import { Population, Prefecture } from '../stores/jotai/population/types';
import * as Fetch from '../apis/fetch';
import {
  mockGetPopulationsResponse,
  mockGetPrefecturesResponse,
} from '../helper/mockResponses';

const user = userEvent.setup();

type ProviderProps = {
  initialValues: Array<
    | [typeof prefectureAtom, Prefecture[]]
    | [typeof selectedPrefectureAtom, Prefecture[]]
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
      mockGetPrefecturesResponse
    );
    vi.spyOn(Fetch, 'getPopulations').mockResolvedValue([
      mockGetPopulationsResponse,
    ]);
  });

  afterEach(() => vi.restoreAllMocks());

  it('should match to the snapshot', async () => {
    const { asFragment } = await waitFor(() => render(<ToastProvider />));
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call getPrefectures when rendering', async () => {
    await waitFor(() => render(<ToastProvider />));

    expect(Fetch.getPrefectures).toHaveBeenCalled();
  });

  it('should get population when select prefecture', async () => {
    await waitFor(() => render(<ToastProvider />));

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