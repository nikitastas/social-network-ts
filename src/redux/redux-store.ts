import {applyMiddleware, combineReducers, createStore} from 'redux'
import { profileReducer } from './profile-reducer'
import { dialogsReducer } from './dialogs-reducer'
import { sidebarReducer } from './sidebar-reducer'
import { usersReducer } from './users-reducer'
import { authReducer } from './auth-reducer'
import {thunk, ThunkDispatch} from "redux-thunk";

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
  auth: authReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, {}, applyMiddleware(thunk))

// Тип для стандартного Dispatch
export type AppDispatch = typeof store.dispatch;

// Тип для Dispatch с поддержкой Thunk
export type AppThunkDispatch = ThunkDispatch<RootState, unknown, any>;

// @ts-ignore
window.store = store

export default store
