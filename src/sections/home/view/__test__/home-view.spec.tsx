import { render, screen } from '@testing-library/react';

import HomeView from '../home-view';

import { RenderWithProvider } from '../../../../utils/provider-test';
import ChangeImgProfile from '../__mock__/changeImg-profile';
import { I18nProvider } from '@/locales';

describe('<HomeView />', () => {
  it('should render HomeView page', () => {
    render(
      <RenderWithProvider>
        <I18nProvider>
          <HomeView />
        </I18nProvider>
      </RenderWithProvider>
    );

    const getImg = screen.getAllByRole('img');

    expect(
      screen.getByText('ยินดีต้อนรับ : Chonlatee Sriwichai')
    ).toBeInTheDocument();

    expect(getImg.length).toBe(1);
  });

  it('should render dialog', () => {
    render(<ChangeImgProfile />);

    expect(screen.getByText('changeImg-profile')).toBeInTheDocument();
  });
});
