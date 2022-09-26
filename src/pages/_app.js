import Router from 'next/router'
import nProgress from 'nprogress'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Layout from '../layouts'
import { store, persistor } from '../redux/store'
import '../styles/globals.css'
import '../styles/nprogress.css'
import 'bootstrap/dist/css/bootstrap.css'
// import CheckConnection from '../components/checkConnection/checkConnection'

Router.events.on('routeChangeStart', nProgress.start)
Router.events.on('routeChangeError', nProgress.done)
Router.events.on('routeChangeComplete', nProgress.done)

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])

  if (Component.getLayout) {
    return (
      // <CheckConnection>
      // </CheckConnection>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <getLayout>
            <Component {...pageProps} />
          </getLayout>
        </PersistGate>
      </Provider>
    )
  }

  return (
    // <CheckConnection>
    // </CheckConnection>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
