import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import NavItem from './components/NavItem';

interface Props {
  pages: {
    about: Array<PageItem>;
    courses: Array<PageItem>;
  };
}

const SidebarNav = ({ pages }: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const { about: aboutPages, courses: coursesPages } = pages;

  return (
    <Box>
      <Box
        width={1}
        paddingX={2}
        paddingY={3}
        display="flex"
        justifyContent="center"
      >
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="theFront"
          width={{ xs: 160 }}
        >
          <Box
            component={'img'}
            src={
              mode === 'light' ? '/svg/logo.svg' : '/svg/logo-icon-white.svg'
            }
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <NavItem title={'O Nas'} items={aboutPages} />
        </Box>
        <Box>
          <NavItem title={'Kursy'} items={coursesPages} />
        </Box>

        <Box marginTop={2}>
          <Button
            size={'large'}
            variant="outlined"
            fullWidth
            component="a"
            href="#"
          >
            Logowanie
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarNav;
