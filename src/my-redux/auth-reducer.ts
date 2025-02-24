import { Dispatch } from 'redux'
import { authApi } from 'api/api'
import { AppThunk } from 'my-redux/redux-store'

export const SET_USER_DATA = 'auth/SET_USER_DATA'

export type AuthResponseType = {
  data: AuthResponseUserType
  messages: any[]
  fieldsErrors: any[]
  resultCode: number
}
export type AuthResponseUserType = {
  id: number
  login: string
  email: string
  isAuth: boolean
}

let initialState = {
  id: 1,
  login: 'Pupkin',
  email: 'pupkin@gmail.com',
  isAuth: false,
}

export const authReducer = (state: AuthResponseUserType = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

type SetUserDataActionType = ReturnType<typeof setAuthUserData>

export type ActionsTypes = SetUserDataActionType

export const setAuthUserData = (payload: { id: number; login: string; email: string; isAuth: boolean }) =>
  ({ type: SET_USER_DATA, payload }) as const

export const getAuthUserData = () => async (dispatch: Dispatch) => {
  let response = await authApi.me()
  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data
    dispatch(setAuthUserData({ id, login, email, isAuth: true }))
  }
}

export const loginTC =
  (args: { email: string; password: string; rememberMe: boolean }): AppThunk =>
  async (dispatch) => {
    let response = await authApi.login(args)
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData())
    }
  }

export const logoutTC = (): AppThunk => async (dispatch) => {
  let response = await authApi.logout()
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData({ id: 0, login: '', email: '', isAuth: false }))
  }
}
