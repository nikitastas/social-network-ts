import React from 'react';
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
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your it-kamasutra?</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    );
};