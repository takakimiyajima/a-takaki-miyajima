import { useEffect } from 'react'
import Head from 'next/head'
import '@/styles/globals.css'
import '@/styles/destyle.css'
import type { AppProps } from 'next/app'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { QueryClient, QueryClientProvider } from 'react-query'
import { GioContextProvider } from '@/hooks/gio'
import { theme } from '@/constants/theme'

const queryClient = new QueryClient()

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
      <Head>
        <title>A takaki miyajima</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <CssBaseline />
          <GioContextProvider>
            <Component {...pageProps} />
          </GioContextProvider>
          {/* {router.pathname === '/' ? (
            <GioContextProvider>
              <Component {...pageProps} />
            </GioContextProvider>
          ) : (
            <Component {...pageProps} />
          )} */}
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
