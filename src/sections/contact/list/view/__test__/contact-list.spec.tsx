import { render, screen } from '@testing-library/react';
import ContactList from '../contact-list';
import { MemoryRouter } from 'react-router-dom';
import DeleteContactDialog from '../__mock__/delete-contact-dialog';
import { I18nProvider } from '@/locales';

describe('<ContactList />', () => {
  it('should render component contact list', () => {
    render(
      <I18nProvider>
        <MemoryRouter>
          <ContactList />
        </MemoryRouter>
      </I18nProvider>
    );

    const getInput = screen.getByTestId('input-search');
    const getBtnClear = screen.getByTestId('button-clear');
    const getBtnSearch = screen.getByTestId('button-search');
    const getTable = screen.getByTestId('table-contact-list');

    expect(getInput).toBeInTheDocument();
    expect(getBtnClear).toBeInTheDocument();
    expect(getBtnSearch).toBeInTheDocument();
    expect(getTable).toBeInTheDocument();
  });

  it('should render DeleteContactDialog', () => {
    render(<DeleteContactDialog />);

    expect(screen.getByText('DeleteContactDialog')).toBeInTheDocument();
  });
});
