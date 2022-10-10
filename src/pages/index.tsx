import { useEffect, useRef } from 'react'
import * as GIO from 'giojs'
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import { useGioContext } from '@/hooks/gio'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  header: {
    opacity: 0.9,
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    textAlign: 'center',
  },
}))

export default function Home(): JSX.Element {
  const classes = useStyles()
  const ref = useRef(null)

  const gioContext = useGioContext()

  useEffect(() => {
    const controller = new GIO.Controller(ref?.current, {
      control: {
        initCountry: 'CA',
      },
      color: {
        in: '#20abe2',
        out: 'white',
        background: 'black',
      },
    })

    controller
      .addData(gioContext.gio)
      .lightenMentioned(true)
      .adjustMentionedBrightness(0.8)
      .adjustOceanBrightness(0.8)
      .disableUnmentioned(true)
      .setAutoRotation(true, 1)

    controller.init()
  }, [gioContext.gio])

  return (
    <div className={classes.root}>
      <header>
        <AppBar position='relative' className={classes.header}>
          <Toolbar>
            <Typography variant='h6' color='inherit' noWrap>
              {'A Takaki Miyajima'}
            </Typography>
          </Toolbar>
        </AppBar>
      </header>

      <main className={classes.root}>
        <div style={{ width: 1440, height: 800, position: 'fixed' }} ref={ref} />
      </main>

      <footer className={classes.footer}>
        <a href='#' rel='noopener noreferrer'>
          Powered by{'Takaki Miyajima'}
        </a>
      </footer>
    </div>
  )
}
