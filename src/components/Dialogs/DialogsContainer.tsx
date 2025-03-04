import React from 'react'
import { Dialogs } from './Dialogs'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'my-redux/redux-store'
import { sendMessageAC } from 'my-redux/dialogs-reducer'
import { useAuth } from 'contexts/AuthContext'
import { Navigate } from 'react-router-dom'

const DialogsContainer = () => {
  const dispatch = useDispatch()
  const dialogsPage = useSelector((state: RootState) => state.dialogsPage)
  const { isAuth } = useAuth() // Используем контекст для проверки аутентификации

  // Проверка аутентификации
  if (!isAuth) {
    return <Navigate to="/login" />
  }

  const sendMessage = (newMessageBody: string) => {
    dispatch(sendMessageAC(newMessageBody))
  }

  return <Dialogs dialogsPage={dialogsPage} sendMessage={sendMessage} />
}

export default DialogsContainer
