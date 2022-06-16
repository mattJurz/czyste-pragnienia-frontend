/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import SvgIcon from '@mui/material/SvgIcon';
import { useTheme } from '@mui/material/styles';
import CommentIcon from '/public/svg/icons/comment-slash-solid.svg';
import SadFaceIcon from '/public/svg/icons/face-frown-regular.svg';
import LinkIcon from '/public/svg/icons/link-solid.svg';

const mock = [
  {
    title: 'Shame keeps us silent',
    icon: CommentIcon,
  },
  {
    title: 'Feeling powerless keeps us stuck',
    icon: LinkIcon,
  },
  {
    title: 'Hopelessness sets in',
    icon: SadFaceIcon,
  },
];

const Advantages = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Lives and relationships are being destroyed by the effects of unwanted
          sexual behavior
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {mock.map(({ title, icon: Icon }, i) => (
          <Grid key={i} item xs={12} md={4}>
            <ListItem
              component="div"
              disableGutters
              data-aos={'fade-up'}
              data-aos-delay={i * 100}
              data-aos-offset={100}
              data-aos-duration={600}
              sx={{
                flexDirection: 'column',
                alignItems: 'center',
                padding: 0,
              }}
            >
              <Box
                component={ListItemAvatar}
                marginBottom={1}
                minWidth={'auto !important'}
              >
                <Box color={theme.palette.primary.main}>
                  <SvgIcon
                    component={Icon}
                    inheritViewBox
                    color="primary"
                    sx={{ fontSize: 60 }}
                  />
                </Box>
              </Box>
              <ListItemText
                primary={title}
                primaryTypographyProps={{
                  variant: 'h6',
                  gutterBottom: true,
                  fontWeight: 400,
                  align: 'left',
                }}
                sx={{
                  '& .MuiListItemText-primary': {
                    fontWeight: 400,
                  },
                  margin: 0,
                }}
              />
            </ListItem>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Advantages;
