import { cleanup, render, screen } from '@testing-library/react';
import { Provider } from 'jotai';
import { useHydrateAtoms } from 'jotai/utils';
import type { ReactNode } from 'react';
import { afterEach, describe, expect, test } from 'vitest';

import { Toast } from './Toast';
import { toastAtom } from '../stores/jotai/toast/atom';
import type { Toast as ToastType } from '../stores/jotai/toast/types';

type ProviderProps = {
  initialValues: [typeof toastAtom, ToastType][];
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

const ToastProvider = () => (
  <TestProvider
    initialValues={[[toastAtom, { status: 'info', message: 'test' }]]}
  >
    <Toast />
  </TestProvider>
);

describe('Toast', () => {
  afterEach(() => {
    cleanup();
  });

  test('should match to the snapshot', () => {
    const { asFragment } = render(<Toast />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should display message is test', () => {
    render(<ToastProvider />);

    const message = screen.getByTestId('toast-message');
    expect(message.textContent).toEqual('test');
  });
});
