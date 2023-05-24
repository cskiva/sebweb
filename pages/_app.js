import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'
import '@fontsource/inter/variable-full.css'

import Analytics from '@/components/analytics'
import { ClientReload } from '@/components/ClientReload'
import Head from 'next/head'
import LayoutWrapper from '@/components/LayoutWrapper'
import { Provider as ReduxProvider } from 'react-redux'
import ShoppingCart from '@/components/ShoppingCart'
import { ThemeProvider } from 'next-themes'
import siteMetadata from '@/data/siteMetadata'
import { store } from '@/state/_store'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }) {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        {isDevelopment && isSocket && <ClientReload />}
        <Analytics />{' '}
        <LayoutWrapper>
          <ShoppingCart />
          <Component {...pageProps} />
        </LayoutWrapper>{' '}
      </ThemeProvider>{' '}
    </ReduxProvider>
  )
}
