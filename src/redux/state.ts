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

type StateType = {
    profilePage: {
        posts: Array<PostDataType>
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