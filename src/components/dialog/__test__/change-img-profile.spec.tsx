import { fireEvent, render, screen } from '@testing-library/react';
import ChangeImgProfile from '../change-img-profile';
import { vi } from 'vitest';
import { UserProfileImgProvider } from '../../../provider/user-profile-img';
import { IMG_PATH } from '../../../constant/img-user';
import { I18nProvider } from '@/locales';

describe('<ChangeImgProfile />', () => {
  const setup = () => {
    const mockOnclose = vi.fn();

    const agrs = render(
      <I18nProvider>
        <UserProfileImgProvider>
          <ChangeImgProfile open onClose={mockOnclose} />
        </UserProfileImgProvider>
      </I18nProvider>
    );

    return {
      ...agrs,
      mockOnclose,
    };
  };

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should render dialog ChangeImgProfile', () => {
    setup();

    const arrImgPath = Object.entries(IMG_PATH)
      .map((item) => item[0])
      .slice(1);

    arrImgPath.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('should call onClose function', () => {
    const { mockOnclose } = setup();

    fireEvent.click(screen.getByTestId('button-close'));

    expect(mockOnclose).toHaveBeenCalledTimes(1);
  });
});
