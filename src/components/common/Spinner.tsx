import { Box, CircularProgress } from '@mui/material'

export const Spinner: React.FC = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      height='100vh'
    >
      <CircularProgress variant='indeterminate' color='primary' />
    </Box>
  )
}
