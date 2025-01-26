import type { FC } from 'react';

import { Box, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import ChangeImgProfile from '../../../components/dialog/change-img-profile';

import { useState } from 'react';
import { useUserProfileContext } from '../../../provider/user-profile-img';

// ---------------------------------------------------------------------------------

const HomeView: FC = () => {
  const { t } = useTranslation();

  const { getUserProfileImg } = useUserProfileContext();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Stack spacing={2}>
        <Typography variant="h5">
          {t('homepage.welcome')} : Chonlatee Sriwichai
        </Typography>

        <Box
          component="img"
          src={getUserProfileImg}
          width={200}
          sx={{ cursor: 'pointer' }}
          onClick={() => setIsOpen(true)}
        />
      </Stack>

      {/* DIALOG */}

      <ChangeImgProfile open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default HomeView;
