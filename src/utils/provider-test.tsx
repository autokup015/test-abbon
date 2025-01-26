import type { FC, PropsWithChildren } from 'react';
import { UserProfileImgProvider } from '../provider/user-profile-img';

const RenderWithProvider: FC<PropsWithChildren> = ({ children }) => {
  return <UserProfileImgProvider>{children}</UserProfileImgProvider>;
};

export { RenderWithProvider };
