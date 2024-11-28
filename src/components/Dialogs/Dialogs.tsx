import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {ChangeEvent} from 'react';
import {DialogsPageType} from '../../redux/dialogs-reducer';

type Props = {
    dialogsPage: DialogsPageType
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

export const Dialogs = ({dialogsPage, updateNewMessageBody, sendMessage}: Props) => {
    let state = dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    let messageElements = state.messages.map(m => <Message key={m.id} message={m.message} />)
    let newMessageBody = state.newMessageBody

    const onSendMessageClick = () => {
        sendMessage()
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        updateNewMessageBody(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody} onChange={onNewMessageChange}
                                  placeholder={'Enter your message'}></textarea>
                    </div>
                    <div>
                        <button onClick={ onSendMessageClick }>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};