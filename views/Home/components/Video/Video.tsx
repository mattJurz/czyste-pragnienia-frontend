import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Container from 'components/Container';
import { useTheme } from '@mui/system';

const Video = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box bgcolor={'primary.main'}>
      <Container position={'relative'} zIndex={3}>
        <Box>
          <Box marginBottom={4}>
            <Typography
              variant={'h4'}
              gutterBottom
              align={'center'}
              sx={{ fontWeight: 700, color: 'common.white' }}
            >
              Sexual Integrity 101 Video Course
            </Typography>
            <Typography
              variant={'h6'}
              component={'p'}
              color={'text.secondary'}
              align={'center'}
              sx={{ color: 'common.white' }}
            >
              We all desire sexual integrity, whether it’s for ourselves or for
              others. But we struggle with knowing where to start.
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundPosition: 'center center',
              height: 324,
              maxWidth: 600,
              margin: '0 auto',
              paddingTop: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box height={1} width={1} maxHeight={600}>
              <Box
                component={'iframe'}
                title="video"
                width="100%"
                height="100%"
                minHeight={320}
                src="https://www.youtube.com/embed/Soj2_4_C9Ws"
                frameBorder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                boxShadow={4}
                borderRadius={2}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Video;
