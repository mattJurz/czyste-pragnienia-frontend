/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Card, CardMedia, SvgIcon } from '@mui/material';
import FistIcon from '/public/svg/icons/hand-fist-solid.svg';
import SmileIcon from '/public/svg/icons/face-smile-regular.svg';
import MedicalKitIcon from '/public/svg/icons/kit-medical-solid.svg';

const mock = [
  {
    title: 'OWN YOUR STORY',
    subtitle: 'Understand how family of origin and trauma impact your behavior',
    icon: FistIcon,
  },
  {
    title: 'GET EQUIPPED',
    subtitle: 'Develop a plan and use tools to create healing and freedom',
    icon: MedicalKitIcon,
  },
  {
    title: 'TAKE YOUR LIFE BACK',
    subtitle: 'Be confident as the real and authentic you',
    icon: SmileIcon,
  },
];

const Hope = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const LeftSide = () => (
    <List disablePadding>
      {mock.map(({ title, subtitle, icon: Icon }, index) => (
        <ListItem
          key={index}
          disableGutters
          data-aos="fade-up"
          data-aos-delay={index * 300}
          data-aos-offset={100}
          data-aos-duration={600}
        >
          <ListItemAvatar>
            <Box
              component={Avatar}
              height={60}
              width={60}
              mr={2}
              variant={'rounded'}
              color={theme.palette.primary.dark}
              bgcolor={`${theme.palette.primary.light}22`}
            >
              <SvgIcon
                component={Icon}
                inheritViewBox
                color="primary"
                sx={{ fontSize: 40 }}
              />
            </Box>
          </ListItemAvatar>
          <ListItemText primary={title} secondary={subtitle} />
        </ListItem>
      ))}
    </List>
  );

  const RightSide = () => (
    <Box component={Card} boxShadow={4} height={1} width={1}>
      <Box
        component={CardMedia}
        height={1}
        width={1}
        minHeight={300}
        image="img/hope-1.jpeg"
      />
    </Box>
  );

  return (
    <Box>
      <Box marginBottom={4}>
        <Box marginBottom={2}>
          <Typography variant="h4" align={'center'} sx={{ fontWeight: 700 }}>
            Nie jesteś Sam
          </Typography>
        </Box>
        <Typography variant="h6" component="p" align={'center'}>
          Like you, we once felt powerless too. But now we’re living in hope,
          healing, and freedom.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item container alignItems={'center'} xs={12} md={6}>
          <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
            <LeftSide />
          </Box>
        </Grid>
        <Grid item container alignItems={'center'} xs={12} md={6}>
          <RightSide />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hope;
