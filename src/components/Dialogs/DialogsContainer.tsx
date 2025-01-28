import { ActionsTypes, sendMessageAC, updateNewMessageBodyAC } from '../../redux/dialogs-reducer'
import { Dialogs } from './Dialogs'
import { connect } from 'react-redux'
import { RootState } from '../../redux/redux-store'

let mapStateToProps = (state: RootState) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

let mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
  return {
    updateNewMessageBody: (body: string) => {
      dispatch(updateNewMessageBodyAC(body))
    },
    sendMessage: () => {
      dispatch(sendMessageAC())
    },
  }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
