import { render, waitFor } from '@testing-library/react';

import ContactCreatePage from '../page';
import { MemoryRouter } from 'react-router-dom';

describe('<ContactCreatePage />', () => {
  it('should render contact page', async () => {
    const { unmount } = render(
      <MemoryRouter>
        <ContactCreatePage />
      </MemoryRouter>,
    );

    await waitFor(() => expect(document.title).toEqual('Contact Create'));

    unmount();
  });
});
