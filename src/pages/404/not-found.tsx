import type { FC } from 'react';

import { Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound: FC = () => {
  const navigate = useNavigate();

  const goHomePage = () => navigate('/');

  return (
    <Stack
      height="calc(100vh - 20px)"
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Stack textAlign="center" spacing={2}>
        <Typography variant="h4">404 - NotFound</Typography>
        <Button
          variant="text"
          sx={{
            color: 'black',

            ':hover': {
              color: 'blue',
              bgcolor: 'transparent',
              textDecoration: 'underline',
            },
          }}
          onClick={goHomePage}
        >
          Go to home page
        </Button>
      </Stack>
    </Stack>
  );
};

export default NotFound;
