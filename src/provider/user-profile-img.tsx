import type { FC, PropsWithChildren } from 'react';

import { createContext, useContext } from 'react';
import { DATA_IMG_USER } from '../constant/data-localstroage';
import { IMG_PATH } from '../constant/img-user';

import { useState } from 'react';

type TImg = {
  name: string;
  path: string;
};

type TUserProfileImg = {
  getUserProfileImg: string;
  listImg: TImg[];
  selectedImg: TImg | null;
  onSaveImg: () => void;
  onChangeImg: (path: string) => void;
  onSelected: (item: TImg) => void;
  onClearSelected: () => void;
};

const CreateUserProfileImgContext = createContext<TUserProfileImg | null>(null);

// ---------------------------------------------------------------------------------

const UserProfileImgProvider: FC<PropsWithChildren> = ({ children }) => {
  const getUserProfileImg =
    localStorage.getItem(DATA_IMG_USER) || IMG_PATH.BLANK;

  const listImg: TImg[] = Object.entries(IMG_PATH)
    .map((item) => ({
      name: item[0],
      path: item[1],
    }))
    .slice(1);

  const [selectedImg, setSelectedImg] = useState<TImg | null>(null);

  // --------------------------- Function ---------------------------

  const onChangeImg = (path: string) => {
    localStorage.setItem(DATA_IMG_USER, path);
  };

  const onSelected = (item: TImg) => setSelectedImg(item);

  const onClearSelected = () => setSelectedImg(null);

  const onSaveImg = () => {
    if (!selectedImg) {
      return;
    }

    onChangeImg(selectedImg.path);
  };

  return (
    <CreateUserProfileImgContext.Provider
      value={{
        getUserProfileImg,
        listImg,
        selectedImg,
        onSaveImg,
        onChangeImg,
        onSelected,
        onClearSelected,
      }}
    >
      {children}
    </CreateUserProfileImgContext.Provider>
  );
};

const useUserProfileContext = () => {
  const context = useContext(CreateUserProfileImgContext);

  if (!context) {
    throw new Error('useUserProfileContext must be in provider');
  }

  return context;
};

// ---------------------------------------------------------------------------------

export { useUserProfileContext, UserProfileImgProvider };
