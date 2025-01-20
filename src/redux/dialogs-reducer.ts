import {v1} from 'uuid';

export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
export const SEND_MESSAGE = 'SEND-MESSAGE'

export type DialogDataType = {
    id: string
    name: string
}
export type MessageDataType = {
    id: string
    message: string
}

export type DialogsPageType = {
    dialogs: Array<DialogDataType>
    messages: Array<MessageDataType>
    newMessageBody: string
}

let initialState = {
    dialogs: [
        {id: v1(), name: 'Nikita'},
        {id: v1(), name: 'Ilya'},
        {id: v1(), name: 'Evgeniy'},
        {id: v1(), name: 'Alex'},
        {id: v1(), name: 'Yuriy'},
        {id: v1(), name: 'Roman'},
    ],
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How is your it-kamasutra?'},
        {id: v1(), message: 'Yo'},
        {id: v1(), message: 'Yo'},
        {id: v1(), message: 'Yo'},
        {id: v1(), message: 'Yo'},
    ],
    newMessageBody: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state, newMessageBody: action.body}
        case SEND_MESSAGE:
            return {...state, messages: [...state.messages, {id: v1(), message: state.newMessageBody}], newMessageBody: ''}
        default:
            return state
    }
}

export type UpdateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyAC>
export type SendMessageActionType = ReturnType<typeof sendMessageAC>

export type ActionsTypes = UpdateNewMessageBodyActionType | SendMessageActionType

export const updateNewMessageBodyAC = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body} as const)
export const sendMessageAC = () => ({type: SEND_MESSAGE} as const)