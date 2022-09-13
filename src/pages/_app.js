import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Layout from '../layouts'
import { store, persistor } from '../redux/store'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import React, { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])

  if (Component.getLayout) {
    return (
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
