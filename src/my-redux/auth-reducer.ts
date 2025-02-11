import { Dispatch } from 'redux'
import { authApi } from 'api/api'

export const SET_USER_DATA = 'SET_USER_DATA'

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
      return { ...state, ...action.data, isAuth: true }
    default:
      return state
  }
}

type SetUserDataActionType = ReturnType<typeof setAuthUserData>

export type ActionsTypes = SetUserDataActionType

export const setAuthUserData = (data: { id: number; login: string; email: string }) =>
  ({ type: SET_USER_DATA, data }) as const
export const getAuthUserData = () => (dispatch: Dispatch) => {
  authApi.me().then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(setAuthUserData(res.data.data))
    }
  })
}
