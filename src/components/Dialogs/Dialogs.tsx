import React from 'react';
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Nikita
                </div>
                <div className={s.dialog}>
                    Yuriy
                </div>
                <div className={s.dialog}>
                    Ilya
                </div>
                <div className={s.dialog}>
                    Evgeniy
                </div>
                <div className={s.dialog}>
                    Alex
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your it-kamasutra?</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    );
};