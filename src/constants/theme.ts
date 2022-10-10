import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    text: {
      primary: '#FFFFFF',
    },
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#19857b',
    },
    info: {
      main: '#blue',
    },
  },
  typography: {
    h1: {
      fontSize: '3rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1rem',
      fontWeight: 500,
    },
  },
})
