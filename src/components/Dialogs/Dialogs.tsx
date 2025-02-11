import s from './Dialogs.module.css'
import { DialogItem } from './DialogItem/DialogItem'
import { Message } from './Message/Message'
import { DialogsPageType } from 'my-redux/dialogs-reducer'
import { AddMessageForm } from 'components/Dialogs/AddMessageForm/AddMessageForm'

type Props = {
  dialogsPage: DialogsPageType
  sendMessage: (newMessageBody: string) => void
}

export const Dialogs = ({ dialogsPage, sendMessage }: Props) => {
  let state = dialogsPage

  let dialogsElements = state.dialogs.map((d) => <DialogItem key={d.id} id={d.id} name={d.name} />)
  let messageElements = state.messages.map((m) => <Message key={m.id} message={m.message} />)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messageElements}</div>
        <div>
          <div>
            <AddMessageForm sendMessage={sendMessage} />
          </div>
        </div>
      </div>
    </div>
  )
}
