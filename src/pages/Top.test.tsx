import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { Top } from './Top';

describe('Top', () => {
  test('should match to the snapshot', () => {
    const { asFragment } = render(<Top />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render "hello!"', () => {
    render(<Top />);
    screen.debug();
    expect(screen.getByText('hello!')).toBeInTheDocument();
  });
});
