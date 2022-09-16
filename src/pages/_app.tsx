import { useEffect } from 'react'
import Head from 'next/head'
import '@/styles/globals.css'
import '@/styles/destyle.css'
import type { AppProps } from 'next/app'
import CssBaseline from '@material-ui/core/CssBaseline'

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <CssBaseline />
      <Head>
        <title>A takaki miyajima</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
