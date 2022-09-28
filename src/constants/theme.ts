import { createTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

export const theme = createTheme({
  palette: {
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    info: {
      main: '#blue',
    },
    error: {
      main: red.A400,
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
