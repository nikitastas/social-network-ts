import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, StateType, updateNewPostText} from './redux/state';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


export let rerenderEntireTree = (state: StateType) => {
    root.render(
        <React.StrictMode>
            <App posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}
                 dialogs={state.dialogsPage.dialogs}
                 messages={state.dialogsPage.messages}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
            />
        </React.StrictMode>
    )
}