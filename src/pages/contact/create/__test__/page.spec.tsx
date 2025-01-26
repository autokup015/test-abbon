import { render, waitFor } from '@testing-library/react';

import ContactCreatePage from '../page';
import { MemoryRouter } from 'react-router-dom';
import { I18nProvider } from '@/locales';

describe('<ContactCreatePage />', () => {
  it('should render contact page', async () => {
    const { unmount } = render(
      <MemoryRouter>
        <I18nProvider>
          <ContactCreatePage />
        </I18nProvider>
      </MemoryRouter>
    );

    await waitFor(() => expect(document.title).toEqual('Contact Create'));

    unmount();
  });
});
