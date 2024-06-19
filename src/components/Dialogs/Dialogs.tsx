import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogDataType, MessageDataType} from '../../index';

type Props = {
    dialogs: Array<DialogDataType>
    messages: Array<MessageDataType>
}

export const Dialogs = ({dialogs, messages}: Props) => {


    let dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messageElements = messages.map(m => <Message message={m.message} />)

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