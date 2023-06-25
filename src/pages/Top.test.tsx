import { render, screen } from '@testing-library/react';
import { Top } from './Top';

describe('Top', () => {
  it('should match to the snapshot', () => {
    const { asFragment } = render(<Top />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render "hello!"', () => {
    render(<Top />);
    screen.debug();
    expect(screen.getByText('hello!')).toBeInTheDocument();
  });
});
