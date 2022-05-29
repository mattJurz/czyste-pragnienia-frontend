import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavItem } from './components';
import Link from 'next/link';
import { IconButton } from '@mui/material';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onSidebarOpen: () => void;
  pages: {
    about: Array<PageItem>;
    courses: Array<PageItem>;
  };
  colorInvert?: boolean;
}

const Topbar = ({
  onSidebarOpen,
  pages,
  colorInvert = false,
}: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const { about: aboutPages, courses: coursesPages } = pages;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="Czyste Pragnienia"
        width={{ xs: 90, md: 100 }}
      >
        <Box
          component={'img'}
          src={
            mode === 'light' && !colorInvert
              ? '/svg/logo-icon.svg'
              : '/svg/logo-icon-white.svg'
          }
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box marginLeft={4}>
          <NavItem title="O nas" href="about-pages" colorInvert={colorInvert} />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title="Kursy"
            href="courses-pages"
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title="Księgarnia"
            href="ksiegarnia"
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title="Materiały"
            href="materialy"
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem title="Blog" href="blog" colorInvert={colorInvert} />
        </Box>
        <Box marginLeft={4}>
          <IconButton
            aria-label="login"
            size="large"
            sx={{ color: 'white' }}
            href="/login"
          >
            <AccountCircleIcon />
          </IconButton>
        </Box>
        {/* <Box marginLeft={4}>
          <Link target="blank" href="/login">
            Logowanie
          </Link>
        </Box> */}
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Topbar;
