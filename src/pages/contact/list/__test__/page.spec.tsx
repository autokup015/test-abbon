import { render, waitFor } from '@testing-library/react';

import ContactListPage from '../page';
import { MemoryRouter } from 'react-router-dom';
import { I18nProvider } from '@/locales';

describe('<ContactListPage />', () => {
  it('should render contact list page', async () => {
    const { unmount } = render(
      <I18nProvider>
        <MemoryRouter>
          <ContactListPage />
        </MemoryRouter>
      </I18nProvider>
    );

    await waitFor(() => expect(document.title).toEqual('Contact List'));

    unmount();
  });
});
