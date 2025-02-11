import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import store from 'my-redux/redux-store'
import { AuthProvider } from 'contexts/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Provider>,
  /* {<StoreContext.Provider value={store}>}
        {    <App />}
        {</StoreContext.Provider>}*/
)
