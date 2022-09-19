import { createTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// const common = {
//   white: '#FFFFFF',
//   black: '#000000',
// }

export const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
})
