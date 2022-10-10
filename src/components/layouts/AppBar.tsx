import { useState } from 'react'
import { useRouter } from 'next/router'
import {
  AppBar as BaseAppBar,
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  Toolbar,
  Typography,
} from '@mui/material'

interface Props {
  window?: () => Window
}

const navItems = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Works',
    to: '/works',
  },
  {
    label: 'Blogs',
    to: '/blogs',
  },
  {
    label: 'About',
    to: '/about',
  },
  {
    label: 'Contact',
    to: '/contact',
  },
]

export const AppBar = (props: Props) => {
  const { window } = props
  const [mobileOpen, setMobileOpen] = useState(false)
  const router = useRouter()

  const handleClick = (to: string) => {
    router.push(to)
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6'>A Takaki Miyajima</Typography>
      <Divider />
      <List>
        {navItems.map(({ label, to }, index) => (
          <ListItem key={`${label}-${index}`}>
            <Button onClick={() => handleClick(to)}>{label}</Button>
          </ListItem>
        ))}
      </List>
    </Box>
  )
  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <header>
      <Box>
        <BaseAppBar position='static'>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant='h6'>A Takaki Miyajima</Typography>
            <Box>
              {navItems.map(({ label, to }, index) => (
                <Button
                  key={`${label}-${index}`}
                  sx={{ color: 'text.primary' }}
                  onClick={() => handleClick(to)}
                >
                  {label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </BaseAppBar>
        <Box component='nav'>
          <Drawer
            container={container}
            variant='temporary'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </header>
  )
}
