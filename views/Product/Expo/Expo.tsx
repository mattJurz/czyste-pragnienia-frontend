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
} from './components';

const Expo = (): JSX.Element => {
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
      <Divider />
      <Container>
        <Advantages />
      </Container>
      <Box bgcolor={'alternate.main'}>
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

export default Expo;
