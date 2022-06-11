import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import Container from 'components/Container';

const Hero = (): JSX.Element => {
  const theme = useTheme();

  const GridItemHeadlineBlock = () => (
    <Box marginBottom={4} marginTop={10} data-aos="fade-up">
      <Typography
        variant="h3"
        gutterBottom
        align="center"
        sx={{
          fontWeight: 900,
          color: 'common.white',
        }}
      >
        Take Back Your Life From Unwanted Sexual Behavior & Betrayal Trauma
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="text.primary"
        align="center"
        sx={{
          fontWeight: 500,
          color: 'common.white',
        }}
      >
        Break Free | Build Your Relationships | Get Your Life Back
      </Typography>
    </Box>
  );

  return (
    <Box
      minHeight={580}
      height={'auto'}
      position={'relative'}
      sx={{
        marginTop: -13,
        paddingTop: 13,
        backgroundColor: theme.palette.alternate.main,
        background: 'url(img/website-banner-greyscale.jpeg) no-repeat center',
        backgroundSize: 'cover',
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
          // backgroundColor: theme.palette.primary.main,
          backgroundImage: `linear-gradient(-30deg, rgba(0, 156, 142, .75) 0%, rgba(255, 217, 106, .75) 100%)`,
          opacity: '0.8',
          zIndex: 1,
        }}
      />
      <Container position={'relative'} zIndex={2}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box width={1} height="100%" display="flex" alignItems="center">
              <GridItemHeadlineBlock />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
