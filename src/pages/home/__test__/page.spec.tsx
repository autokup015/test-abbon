import { render, waitFor } from '@testing-library/react';
import Homepage from '../page';
import { RenderWithProvider } from '../../../utils/provider-test';
import { I18nProvider } from '@/locales';

describe('<Homepage />', () => {
  it('should render homepage', async () => {
    const { unmount } = render(
      <RenderWithProvider>
        <I18nProvider>
          <Homepage />
        </I18nProvider>
      </RenderWithProvider>
    );

    await waitFor(() => expect(document.title).toEqual('Homepage'));

    unmount();
  });
});
