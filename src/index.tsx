import React from 'react';
import './index.css';
import {store} from './redux/state';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {StateType} from './redux/state';



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


let rerenderEntireTree = (state: StateType) => {
    root.render(
        <React.StrictMode>
            <App posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}
                 dialogs={state.dialogsPage.dialogs}
                 messages={state.dialogsPage.messages}
                 addPost={store.addPost}
                 updateNewPostText={store.updateNewPostText}
            />
        </React.StrictMode>
    )
}
rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)