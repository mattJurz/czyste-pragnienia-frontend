import { Theme, responsiveFontSizes } from '@mui/material';
import { createTheme, ComponentsOverrides } from '@mui/material/styles';
import shadows from './shadows';
import { light } from './palette';

const theme = createTheme({
  palette: light,
  shadows: shadows(),
  typography: {
    fontFamily: '"League Spartan", sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 'medium' as React.CSSProperties['fontWeight'],
    },
  },
  zIndex: {
    appBar: 1200,
    drawer: 1300,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
       body{}
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          borderRadius: 5,
          paddingTop: 10,
          paddingBottom: 10,
        },
        containedSecondary: { color: 'white' },
      } as ComponentsOverrides['MuiButton'],
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: 5,
        },
      } as ComponentsOverrides['MuiInputBase'],
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 5,
        },
        input: {
          borderRadius: 5,
        },
      } as ComponentsOverrides['MuiOutlinedInput'],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      } as ComponentsOverrides['MuiCard'],
    },
  },
});

const getTheme = (): Theme => responsiveFontSizes(theme);

export default getTheme;
