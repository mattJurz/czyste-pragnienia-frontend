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
  Courses,
} from './components';
import { useTheme } from '@mui/material';

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
      <Container>
        <Groups />
      </Container>
      <Divider />
      <Box
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <Container>
          <Courses />
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

      {/*  <Box bgcolor={'alternate.main'}>
        <Container>
          <VideoSection />
        </Container>
      </Box>
      <Container>
        <Speakers />
      </Container>
      <Divider />
      <About /> */}
    </Main>
  );
};

export default Home;
