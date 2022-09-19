import { useEffect, useRef } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import * as GIO from 'giojs'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  // main: {
  //   marginTop: theme.spacing(8),
  //   marginBottom: theme.spacing(2),
  // },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    textAlign: 'center',
  },
}))

const data = [
  {
    e: 'JP',
    i: 'CA',
    v: 5000000,
  },
  {
    e: 'JP',
    i: 'TW',
    v: 1000000,
  },
  {
    e: 'JP',
    i: 'TH',
    v: 1000000,
  },
  {
    e: 'JP',
    i: 'KR',
    v: 1000000,
  },
  {
    e: 'JP',
    i: 'CN',
    v: 1000000,
  },
  {
    e: 'JP',
    i: 'KR',
    v: 1000000,
  },
  {
    e: 'JP',
    i: 'IT',
    v: 1000000,
  },
  {
    e: 'JP',
    i: 'ID',
    v: 1000000,
  },
  {
    e: 'JP',
    i: 'AU',
    v: 1000000,
  },
  {
    e: 'JP',
    i: 'HR',
    v: 1000000,
  },
  {
    e: 'JP',
    i: 'ES',
    v: 1000000,
  },
  {
    e: 'JP',
    i: 'LK',
    v: 1000000,
  },
  {
    e: 'JP',
    i: 'SK',
    v: 1000000,
  },
  {
    e: 'JP',
    i: 'SI',
    v: 1000000,
  },
  {
    e: 'JP',
    i: 'PW',
    v: 1000000,
  },
  {
    e: 'JP',
    i: 'HU',
    v: 1000000,
  },
  {
    e: 'JP',
    i: 'PH',
    v: 1000000,
  },
  {
    e: 'JP',
    i: 'PE',
    v: 1000000,
  },
  {
    e: 'JP',
    i: 'BO',
    v: 1000000,
  },
  {
    e: 'JP',
    i: 'PT',
    v: 1000000,
  },
  // {
  //   e: 'JP',
  //   i: 'FM',
  //   v: 1000000,
  // },
  {
    e: 'JP',
    i: 'VA',
    v: 1000000,
  },
  {
    e: 'JP',
    i: 'MA',
    v: 1000000,
  },
  {
    e: 'JP',
    i: 'US',
    v: 1000000,
  },
  {
    e: 'US',
    i: 'AI',
    v: 1000000,
  },
]

export const Home = (): JSX.Element => {
  const classes = useStyles()
  const ref = useRef(null)

  useEffect(() => {
    const controller = new GIO.Controller(ref.current, {
      control: {
        initCountry: 'JP',
      },
    })

    controller.addData(data)
    controller.lightenMentioned(true)
    controller.adjustMentionedBrightness(0.8)
    controller.setAutoRotation(true, 0.8)
    controller.adjustOceanBrightness(0.8)

    controller.init()
  }, [])

  return (
    <div className={classes.root}>
      <header>
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              {"a takaki miyajima"}
            </Typography>
          </Toolbar>
        </AppBar>
      </header>

      <main className={classes.root}>
        <div style={{ width: 1440, height: 800 }} ref={ref} />
      </main>

      <footer className={classes.footer}>
        <a
          href="#"
          rel="noopener noreferrer"
        >
          Powered by{'Takaki Miyajima'}
        </a>
      </footer>
    </div>
  )
}

export default Home
