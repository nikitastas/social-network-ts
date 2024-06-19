import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type Props = {
    id: number
    name: string
}

export const DialogItem = ({id, name}: Props) => {

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + id}>{name}</NavLink>
        </div>
    )
}