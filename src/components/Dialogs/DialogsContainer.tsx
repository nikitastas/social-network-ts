import React from 'react';
import { Dialogs } from './Dialogs';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/redux-store';
import { sendMessageAC, updateNewMessageBodyAC } from '../../redux/dialogs-reducer';
import { useAuth } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

export const DialogsContainer = () => {
  const dispatch = useDispatch();
  const dialogsPage = useSelector((state: RootState) => state.dialogsPage);
  const { isAuth } = useAuth(); // Используем контекст для проверки аутентификации

  // Проверка аутентификации
  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  // Обработчики действий
  const updateNewMessageBody = (body: string) => {
    dispatch(updateNewMessageBodyAC(body));
  };

  const sendMessage = () => {
    dispatch(sendMessageAC());
  };

  return (
    <Dialogs
      dialogsPage={dialogsPage}
      updateNewMessageBody={updateNewMessageBody}
      sendMessage={sendMessage}
    />
  );
};