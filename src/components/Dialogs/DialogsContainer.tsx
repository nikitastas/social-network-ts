import {ActionTypes} from '../../redux/store';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {RootState} from '../../redux/redux-store';


/*export const DialogsContainer = ({}: Props) => {
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
}*/

let mapStateToProps = (state: RootState) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)