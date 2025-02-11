import { AppThunk } from 'my-redux/redux-store'
import { getAuthUserData } from 'my-redux/auth-reducer'

export const SET_IS_INITIALIZED = 'SET_IS_INITIALIZED'

export type appReducerStateType = {
  isInitialized: boolean
}

let initialState = {
  isInitialized: false,
}

export const appReducer = (state: appReducerStateType = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case SET_IS_INITIALIZED:
      return { ...state, isInitialized: true }
    default:
      return state
  }
}

type SetIsInitializedActionType = ReturnType<typeof setIsInitializedAC>

export type ActionsTypes = SetIsInitializedActionType

export const setIsInitializedAC = () => ({ type: SET_IS_INITIALIZED }) as const

export const setIsInitializedTC = (): AppThunk => (dispatch) => {
  dispatch(getAuthUserData()).then((res) => {
    dispatch(setIsInitializedAC())
  })
}
