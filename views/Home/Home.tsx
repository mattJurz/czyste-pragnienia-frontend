import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  About,
  Advantages,
  Description,
  Hero,
  PromoNumbers,
  Speakers,
  VideoSection,
  Groups,
  GroupSlider,
} from './components';
import { alpha, useTheme } from '@mui/material';
import Hope from './components/Hope';
import LastStories from './components/LastStories';
import Video from './components/Video';

const Home = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Main colorInvert={true}>
      <Hero />
      {/* <Box bgcolor={'primary.main'}>
        <Container>
          <Description />
        </Container>
      </Box> */}
      {/* <Container>
        <PromoNumbers />
      </Container>
      <Divider />*/}
      <Container>
        <Advantages />
      </Container>
      <Divider />
      <Box
        bgcolor={'alternate.main'}
        sx={{
          position: 'relative',
          '&::after': {
            position: 'absolute',
            content: '""',
            width: '30%',
            zIndex: 1,
            top: 0,
            left: '5%',
            height: '100%',
            backgroundSize: '18px 18px',
            backgroundImage: `radial-gradient(${alpha(
              theme.palette.primary.dark,
              0.4,
            )} 20%, transparent 20%)`,
            opacity: 0.2,
          },
        }}
      >
        <Container>
          <Hope />
        </Container>
      </Box>
      {/* <Container>
        <VideoSection />
      </Container> */}
      <Video />
      {/* <Container>
        <Groups />
      </Container> */}
      <Divider />
      <Box
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <Container>
          <GroupSlider />
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            width: '100%',
            marginBottom: theme.spacing(-1),
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>

      <Container paddingTop={'0 !important'}>
        <LastStories />
      </Container>
      {/* <Box bgcolor={'alternate.main'}>
        <Container>
          <Speakers />
        </Container>
      </Box>
      <Divider />
      <About /> */}
    </Main>
  );
};

export default Home;
