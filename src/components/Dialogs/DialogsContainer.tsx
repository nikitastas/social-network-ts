import {StoreType} from '../../redux/store';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';

type Props = {
    store: StoreType
}

export const DialogsContainer = ({store}: Props) => {
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