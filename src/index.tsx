import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import state from './redux/redux-store';



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


let rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <Provider store={state}><App/></Provider>
            {/*<StoreContext.Provider value={store}>*/}
            {/*    <App />*/}
            {/*</StoreContext.Provider>*/}
        </React.StrictMode>
    )
}
rerenderEntireTree()

store.subscribe(() => {
    rerenderEntireTree()
})