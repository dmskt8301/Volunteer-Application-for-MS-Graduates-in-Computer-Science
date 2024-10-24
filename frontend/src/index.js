import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { Provider } from 'react-redux'
import { persistor, store } from './store'
import { SnackbarProvider } from 'notistack'
import { PersistGate } from 'redux-persist/integration/react'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
      <SnackbarProvider maxSnack={3}>
        <Provider store={store}>
          <PersistGate loading="Loading..." persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>{' '}
      </SnackbarProvider>
  </React.StrictMode>
)
