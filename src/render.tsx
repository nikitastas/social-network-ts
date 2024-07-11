import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, StateType} from './redux/state';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


export let rerenderEntireTree = (state: StateType) => {
    root.render(
        <React.StrictMode>
            <App posts={state.profilePage.posts} dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages}
                 addPost={addPost}/>
        </React.StrictMode>
    )
}