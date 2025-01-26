import { render, waitFor } from '@testing-library/react';
import Homepage from '../page';
import { RenderWithProvider } from '../../../utils/provider-test';

describe('<Homepage />', () => {
  it('should render homepage', async () => {
    const { unmount } = render(
      <RenderWithProvider>
        <Homepage />
      </RenderWithProvider>,
    );

    await waitFor(() => expect(document.title).toEqual('Homepage'));

    unmount();
  });
});
