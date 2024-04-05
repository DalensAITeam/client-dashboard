import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './output.css'
import { store,persistor } from './Redux/store'
import { Provider } from 'react-redux'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { PersistGate } from 'redux-persist/integration/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
   <GoogleOAuthProvider clientId= '563372247523-5tucgbcqdqk9barhv3gho6t8ofl7shkv.apps.googleusercontent.com'>
      <App />
      </GoogleOAuthProvider>
      </PersistGate>
  </Provider>
)
