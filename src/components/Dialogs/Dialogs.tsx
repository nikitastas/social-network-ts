import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type PropsDialogItemType = {
    id: number
    name: string
}

const DialogItem = ({id, name}: PropsDialogItemType) => {

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + id}>{name}</NavLink>
        </div>
    )
}

type PropsMessageType = {
    message: string
}

const Message = ({message}: PropsMessageType) => {
    return (
        <div className={s.message}>{message}</div>
    )
}

type DialogsDataType = {
    id: number
    name: string
}
type MessageDataType = {
    id: number
    message: string
}


export const Dialogs = () => {
    let dialogs: Array<DialogsDataType> = [
        {id: 1, name: 'Nikita'},
        {id: 2, name: 'Ilya'},
        {id: 3, name: 'Evgeniy'},
        {id: 4, name: 'Alex'},
        {id: 5, name: 'Yuriy'},
        {id: 6, name: 'Roman'},
    ]

    let message: Array<MessageDataType> = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'},
    ]

    let dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messageElements = message.map(m => <Message message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
};