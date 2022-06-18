/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from 'components/Container';

export interface Props {
  title: string,
  content: string,
  image?: string
}

const Section = ({title, content, image}: Props): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Container>
      <Box>
        <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
          <Grid item container alignItems={'center'} xs={12} md={6}>
            <Box>
              <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
                {title}
              </Typography>
              <Typography component={'p'}>
                {content}
              </Typography>
            </Box>
          </Grid>
          {image && <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            xs={12}
            md={6}
          >
            <Box maxWidth={500} width={1}>
              <Box
                component={'img'}
                src={image}
                width={1}
                height={1}
                sx={{
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
                }}
              />
            </Box>
          </Grid>}
        </Grid>
      </Box>
    </Container>
  );
};

export default Section;
