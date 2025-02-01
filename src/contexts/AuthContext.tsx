import React, { createContext, useContext, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/redux-store';

// Создаем контекст
const AuthContext = createContext<{ isAuth: boolean }>({ isAuth: false });

// Провайдер для контекста
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  const value = useMemo(() => ({ isAuth }), [isAuth]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Хук для использования контекста
export const useAuth = () => {
  return useContext(AuthContext);
};