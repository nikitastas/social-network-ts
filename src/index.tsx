import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type PostDataType = {
    id: number
    message: string
    likesCount: number
}

let posts: Array<PostDataType> = [
    {id: 1, message: "Hi, how are you?", likesCount: 12},
    {id: 2, message: "It's my first post", likesCount: 11},
    {id: 2, message: "Bla bla", likesCount: 9},
    {id: 2, message: "Da da", likesCount: 19},
]

export type DialogDataType = {
    id: number
    name: string
}
export type MessageDataType = {
    id: number
    message: string
}

let dialogs: Array<DialogDataType> = [
    {id: 1, name: 'Nikita'},
    {id: 2, name: 'Ilya'},
    {id: 3, name: 'Evgeniy'},
    {id: 4, name: 'Alex'},
    {id: 5, name: 'Yuriy'},
    {id: 6, name: 'Roman'},
]

let messages: Array<MessageDataType> = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it-kamasutra?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
    {id: 6, message: 'Yo'},
]

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
