import { fireEvent, render, screen } from '@testing-library/react';
import TextDialog from '../text-dialog';

import { vi } from 'vitest';

describe('<TextDialog />', () => {
  const setup = () => {
    const mockOnClose = vi.fn();

    const mockData = {
      title: 'title',
      description: 'description',
    };

    const args = render(
      <TextDialog
        open
        onClose={mockOnClose}
        title={mockData.title}
        description={mockData.description}
      />,
    );

    return { ...args, mockData, mockOnClose };
  };

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should render text dialog', () => {
    const { mockData } = setup();

    expect(screen.getByText(mockData.title)).toBeInTheDocument();
    expect(screen.getByText(mockData.description)).toBeInTheDocument();
  });

  it('should call close dialog', () => {
    const { mockOnClose } = setup();

    fireEvent.click(screen.getByTestId('button-close'));

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
