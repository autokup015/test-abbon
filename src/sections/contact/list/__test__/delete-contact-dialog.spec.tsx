import { fireEvent, render, screen } from '@testing-library/react';

import DeleteContactDialog from '../delete-contact-dialog';
import { afterEach, vi } from 'vitest';
import { TCreateList } from '../../create/schema/create-schema';
import { I18nProvider } from '@/locales';

describe('<DeleteContactDialog />', () => {
  const setup = () => {
    const mockOnClose = vi.fn();

    const mockInitialValue: TCreateList = {
      id: '1150',
      name: 'Auto',
      age: 20,
    };

    const agrs = render(
      <I18nProvider>
        <DeleteContactDialog
          open
          onClose={mockOnClose}
          initialValue={mockInitialValue}
        />
      </I18nProvider>
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

    expect(screen.getByText('ลบรายการติดต่อ')).toBeInTheDocument();

    expect(
      screen.getByText(`คุณต้องการลบ ${mockInitialValue.name} ?`)
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
