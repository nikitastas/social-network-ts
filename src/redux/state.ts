let rerenderEntireTree = () => {
    console.log('State was changed')
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

export type StateType = {
    profilePage: {
        posts: Array<PostDataType>
        newPostText: string
    }
    dialogsPage: {
        dialogs: Array<DialogDataType>
        messages: Array<MessageDataType>
    }
}


export let state: StateType = {
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
    },
}

// @ts-ignore
window.state = state

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}