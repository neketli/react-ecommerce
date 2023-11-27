import React from 'react'
import './index.css'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import App from '~/App'
import { persistor, store } from '~/store'
import { PersistGate } from 'redux-persist/integration/react'
import Loader from '~/components/UI/Loader'

const container = document.getElementById('root')

if (!container) throw new Error("Could not find root element with id 'root'")

const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
