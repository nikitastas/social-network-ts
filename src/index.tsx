import React from 'react';
import './index.css';
//import {store} from './redux/redux-store';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {StateType, store, StoreType} from './redux/store';



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


let rerenderEntireTree = (state: StateType, store: StoreType) => {
    root.render(
        <React.StrictMode>
            <App store={store} />
        </React.StrictMode>
    )
}
rerenderEntireTree(store.getState(), store)

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state, store)
})