import type { FC } from 'react';

import { Box, Stack } from '@mui/material';

const Footer: FC = () => {
  const sizeIcon = 25;

  const onCallPhone = () => {
    window.location.href = 'tel:+1234567890';
  };

  const onSendEmail = () => {
    window.location.href = 'mailto:atbochonlatee@gmail.com';
  };

  const onShowLine = () => {
    window.location.href = 'https://line.me/ti/p/~autochonlatee';
  };

  return (
    <Box
      height={100}
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        borderTop: '1px solid #eee',
      }}
    >
      <Stack direction="row" spacing={2}>
        <Box
          component="img"
          src="/img/phone.svg"
          width={sizeIcon}
          height={sizeIcon}
          sx={{
            cursor: 'pointer',
          }}
          onClick={onCallPhone}
        />

        <Box
          component="img"
          src="/img/mail.svg"
          width={sizeIcon}
          height={sizeIcon}
          sx={{
            cursor: 'pointer',
          }}
          onClick={onSendEmail}
        />

        <Box
          component="img"
          src="/img/line.svg"
          width={sizeIcon}
          height={sizeIcon}
          sx={{
            cursor: 'pointer',
          }}
          onClick={onShowLine}
        />
      </Stack>
    </Box>
  );
};

export default Footer;
