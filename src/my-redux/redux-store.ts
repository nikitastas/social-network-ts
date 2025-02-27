import { applyMiddleware, combineReducers, compose, createStore, UnknownAction } from 'redux'
import { profileReducer } from './profile-reducer'
import { dialogsReducer } from './dialogs-reducer'
import { sidebarReducer } from './sidebar-reducer'
import { usersReducer } from './users-reducer'
import { authReducer } from './auth-reducer'
import { thunk, ThunkAction, ThunkDispatch } from 'redux-thunk'
import { appReducer } from 'my-redux/app-reducer'

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
  auth: authReducer,
  app: appReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(thunk)))

// Тип для стандартного Dispatch
export type AppDispatch = typeof store.dispatch

// Тип для Dispatch с поддержкой Thunk
export type AppThunkDispatch = ThunkDispatch<RootState, unknown, any>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, UnknownAction>

// @ts-ignore
window.__store__ = store

export default store
