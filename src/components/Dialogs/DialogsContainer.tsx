import {StoreType} from '../../redux/store';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {useContext} from 'react';
import {StoreContext} from '../../StoreContext';

type Props = {

}

export const DialogsContainer = ({}: Props) => {
    let store = useContext(StoreContext)

    let state = store.getState()

    const onSendMessageClick = () => {
        store.dispatch(sendMessageCreator())
    }

    const onNewMessageChange = (body: string) => {
        store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state.dialogsPage}/>
    )
}