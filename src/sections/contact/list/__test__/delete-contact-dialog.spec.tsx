import { fireEvent, render, screen } from '@testing-library/react';

import DeleteContactDialog from '../delete-contact-dialog';
import { afterEach, vi } from 'vitest';
import { TCreateList } from '../../create/schema/create-schema';

describe('<DeleteContactDialog />', () => {
  const setup = () => {
    const mockOnClose = vi.fn();

    const mockInitialValue: TCreateList = {
      id: '1150',
      name: 'Auto',
      age: 20,
    };

    const agrs = render(
      <DeleteContactDialog
        open
        onClose={mockOnClose}
        initialValue={mockInitialValue}
      />,
    );

    return {
      ...agrs,
      mockOnClose,
      mockInitialValue,
    };
  };

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should render delete contact dialog', () => {
    const { mockInitialValue } = setup();

    const getBtnCancel = screen.getByTestId('button-cancel');
    const getBtnConfirm = screen.getByTestId('button-confirm');

    expect(
      screen.getByText(
        `contact.list.dialog_text_description ${mockInitialValue.name} ?`,
      ),
    ).toBeInTheDocument();

    expect(getBtnCancel).toBeInTheDocument();

    expect(getBtnConfirm).toBeInTheDocument();
  });

  it('should close dialog', () => {
    const { mockOnClose } = setup();

    const getBtnCancel = screen.getByTestId('button-cancel');

    fireEvent.click(getBtnCancel);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
