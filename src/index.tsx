import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from './redux/redux-store';
import {StoreContext} from './StoreContext';
import {StoreType} from './redux/store';



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


let rerenderEntireTree = (store: StoreType) => {
    root.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
                <App />
            </StoreContext.Provider>
        </React.StrictMode>
    )
}
rerenderEntireTree(store)

store.subscribe(() => {
    rerenderEntireTree(store)
})