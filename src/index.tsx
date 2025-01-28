import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/redux-store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  /* {<StoreContext.Provider value={store}>}
        {    <App />}
        {</StoreContext.Provider>}*/
)
