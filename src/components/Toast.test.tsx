import { render, screen } from '@testing-library/react';
import { useHydrateAtoms } from 'jotai/utils';
import { Provider } from 'jotai';
import { ReactNode } from 'react';
import { Toast } from './Toast';
import { Toast as ToastType } from '../stores/jotai/toast/types';
import { toastAtom } from '../stores/jotai/toast/atom';

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
  it('should match to the snapshot', () => {
    const { asFragment } = render(<Toast />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should display message is test', () => {
    render(<ToastProvider />);

    const message = screen.getByTestId('toast-message');
    expect(message.textContent).toEqual('test');
  });
});
