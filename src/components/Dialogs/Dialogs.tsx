import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogDataType, MessageDataType} from '../../redux/state';
import {useRef} from 'react';

type Props = {
    dialogs: Array<DialogDataType>
    messages: Array<MessageDataType>
}

export const Dialogs = ({dialogs, messages}: Props) => {


    let dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messageElements = messages.map(m => <Message message={m.message} />)

    const addMessageHandler = () => {
        if (newMessage.current) alert(newMessage.current.value)
    }
    let newMessage = useRef<HTMLTextAreaElement>(null)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div>
                    <div>
                        <textarea ref={newMessage}>Add some text</textarea>
                    </div>
                    <div>
                        <button onClick={ addMessageHandler }>Add post</button>
                    </div>
                </div>
            </div>
        </div>
    );
};