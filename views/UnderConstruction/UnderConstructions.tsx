import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';

import { Fixed, Fluid } from '../../layouts';
import { Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/system';

const UnderConstruction = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Box
      component="main"
      sx={{
        height: '100vh',
        backgroundColor: theme.palette.alternate.main,
        background: 'url(img/bg1-bw.jpeg) no-repeat center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          height: 1,
          backgroundImage: `linear-gradient(-30deg, rgba(0, 156, 142, .75) 0%, rgba(255, 217, 106, .75) 100%)`,
          opacity: '0.8',
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Box component={'img'} src="/svg/logo-white.svg" width="200px" mb={5} />
        <Typography
          variant="h4"
          color="white"
          fontWeight="900"
          letterSpacing={5}
          textTransform="uppercase"
          fontFamily="Montserrat"
        >
          już wkrótce...
        </Typography>
      </Box>
      {/* <Box
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      /> */}
    </Box>
  );
};

export default UnderConstruction;
