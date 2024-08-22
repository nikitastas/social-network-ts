import {DialogsPageType} from './store';

export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
export const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 6, message: body})
            return state
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body: string) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})