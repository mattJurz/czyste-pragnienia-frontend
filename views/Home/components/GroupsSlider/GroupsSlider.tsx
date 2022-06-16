import React from 'react';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { colors } from '@mui/material';

const mock = [
  {
    price: '$59 / month',
    media: 'https://assets.maccarianagency.com/backgrounds/img5.jpg',
    title: 'S101',
    location: 'online',
    users: [
      'https://assets.maccarianagency.com/avatars/img1.jpg',
      'https://assets.maccarianagency.com/avatars/img2.jpg',
      'https://assets.maccarianagency.com/avatars/img3.jpg',
      'https://assets.maccarianagency.com/avatars/img4.jpg',
      'https://assets.maccarianagency.com/avatars/img5.jpg',
    ],
  },
  {
    price: '$69 / month',
    media: 'https://assets.maccarianagency.com/backgrounds/img6.jpg',
    location: 'online',
    title: 'Software engineering',
    tutor: 'Jhon Smith',
    users: [
      'https://assets.maccarianagency.com/avatars/img1.jpg',
      'https://assets.maccarianagency.com/avatars/img2.jpg',
      'https://assets.maccarianagency.com/avatars/img3.jpg',
      'https://assets.maccarianagency.com/avatars/img4.jpg',
      'https://assets.maccarianagency.com/avatars/img5.jpg',
    ],
  },
  {
    price: '$49 / month',
    media: 'https://assets.maccarianagency.com/backgrounds/img7.jpg',
    title: 'Graphic design for beginners',
    location: 'online',
    tutor: 'Nicol Adams',
    users: [
      'https://assets.maccarianagency.com/avatars/img1.jpg',
      'https://assets.maccarianagency.com/avatars/img2.jpg',
      'https://assets.maccarianagency.com/avatars/img3.jpg',
      'https://assets.maccarianagency.com/avatars/img4.jpg',
      'https://assets.maccarianagency.com/avatars/img5.jpg',
    ],
  },
  {
    price: '$59 / month',
    media: 'https://assets.maccarianagency.com/backgrounds/img9.jpg',
    location: 'online',
    title: 'Marketing VS Sales',
    tutor: 'Joshua Karamaki',
    users: [
      'https://assets.maccarianagency.com/avatars/img1.jpg',
      'https://assets.maccarianagency.com/avatars/img2.jpg',
      'https://assets.maccarianagency.com/avatars/img3.jpg',
      'https://assets.maccarianagency.com/avatars/img4.jpg',
      'https://assets.maccarianagency.com/avatars/img5.jpg',
    ],
  },
];

const GroupSlider = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const sliderOpts = {
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: isMd ? 3 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          Grupy
        </Typography>
        <Typography
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Join a group
        </Typography>
      </Box>
      <Box maxWidth={{ xs: 420, sm: 620, md: 1 }} margin={'0 auto'}>
        <Slider {...sliderOpts}>
          {mock.map((item, i) => (
            <Box key={i} padding={{ xs: 1, md: 2, lg: 3 }}>
              <Box
                display={'block'}
                width={1}
                height={1}
                sx={{
                  textDecoration: 'none',
                  transition: 'all .2s ease-in-out',
                  '&:hover': {
                    transform: `translateY(-${theme.spacing(1 / 2)})`,
                  },
                }}
              >
                <Box
                  component={Card}
                  width={1}
                  height={1}
                  display={'flex'}
                  flexDirection={'column'}
                  sx={{ backgroundImage: 'none' }}
                >
                  <CardMedia
                    title={item.title}
                    image={item.media}
                    sx={{
                      position: 'relative',
                      height: { xs: 240, sm: 340, md: 280 },
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      component={'svg'}
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 1921 273"
                      sx={{
                        position: 'absolute',
                        width: '100%',
                        left: 0,
                        bottom: 0,
                        right: 0,
                        zIndex: 1,
                      }}
                    >
                      <polygon
                        fill={theme.palette.background.paper}
                        points="0,273 1921,273 1921,0 "
                      />
                    </Box>
                    <Box
                      display={'flex'}
                      justifyContent={'space-between'}
                      position={'absolute'}
                      bottom={0}
                      padding={2}
                      width={1}
                      zIndex={2}
                    >
                      <Box
                        padding={1}
                        bgcolor={'background.paper'}
                        boxShadow={1}
                        borderRadius={2}
                      >
                        <Typography sx={{ fontWeight: 600 }}>
                          {item.price}
                        </Typography>
                      </Box>
                    </Box>
                  </CardMedia>
                  <CardContent>
                    <Typography
                      variant={'h6'}
                      gutterBottom
                      align={'left'}
                      sx={{ fontWeight: 700 }}
                    >
                      {item.title}
                    </Typography>
                    <Box display={'flex'} alignItems={'center'} marginY={2}>
                      <Box
                        component={'svg'}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={24}
                        height={24}
                        marginRight={1}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </Box>
                      <Typography variant={'subtitle2'} color="text.secondary">
                        {item.location}
                      </Typography>
                    </Box>
                  </CardContent>
                  <Box flexGrow={1} />
                  <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <Button
                      endIcon={
                        <Box
                          component={'svg'}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          width={24}
                          height={24}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </Box>
                      }
                    >
                      Dołącz
                    </Button>
                  </CardActions>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default GroupSlider;
