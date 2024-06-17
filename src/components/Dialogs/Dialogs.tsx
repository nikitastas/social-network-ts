import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type Props = {
    id: number
    name: string
}

const DialogItem = ({id, name}: Props) => {

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

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id={1} name={'Nikita'}/>
                <DialogItem id={2} name={'Ilya'}/>
                <DialogItem id={3} name={'Evgeniy'}/>
                <DialogItem id={4} name={'Alex'}/>
                <DialogItem id={5} name={'Yuriy'}/>
                <DialogItem id={6} name={'Roman'}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi'} />
                <Message message={'How is your it-kamasutra?'} />
                <Message message={'Yo'} />
                <Message message={'Yo'} />
                <Message message={'Yo'} />
            </div>
        </div>
    );
};