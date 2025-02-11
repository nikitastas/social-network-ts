import { v1 } from 'uuid'

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
}

let initialState = {
  dialogs: [
    { id: v1(), name: 'Nikita' },
    { id: v1(), name: 'Ilya' },
    { id: v1(), name: 'Evgeniy' },
    { id: v1(), name: 'Alex' },
    { id: v1(), name: 'Yuriy' },
    { id: v1(), name: 'Roman' },
  ],
  messages: [
    { id: v1(), message: 'Hi' },
    { id: v1(), message: 'How is your it-kamasutra?' },
    { id: v1(), message: 'Yo' },
    { id: v1(), message: 'Yo' },
    { id: v1(), message: 'Yo' },
    { id: v1(), message: 'Yo' },
  ],
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { id: v1(), message: action.newMessageBody }],
      }
    default:
      return state
  }
}
export type SendMessageActionType = ReturnType<typeof sendMessageAC>

export type ActionsTypes = SendMessageActionType

export const sendMessageAC = (newMessageBody: string) => ({ type: SEND_MESSAGE, newMessageBody }) as const
