import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';


export let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 11},
                {id: 2, message: "Bla bla", likesCount: 9},
                {id: 2, message: "Da da", likesCount: 19},
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Nikita'},
                {id: 2, name: 'Ilya'},
                {id: 3, name: 'Evgeniy'},
                {id: 4, name: 'Alex'},
                {id: 5, name: 'Yuriy'},
                {id: 6, name: 'Roman'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
                {id: 6, message: 'Yo'},
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    getState() {
       return this._state
    },
    _callSubscriber(state: StateType) {
        console.log('State changed')
    },
    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer
    },
    dispatch(action: any) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)

    },
    updateNewPostText(newText: string) {

    },

}


export type PostDataType = {
    id: number
    message: string
    likesCount: number
}
export type DialogDataType = {
    id: number
    name: string
}
export type MessageDataType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: Array<PostDataType>
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogDataType>
    messages: Array<MessageDataType>
    newMessageBody: string
}

export type SidebarType = {}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

/*type StoreType = {
    _state: StateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: (state: StateType) => void) => void
}*/



// @ts-ignore
window.store = store