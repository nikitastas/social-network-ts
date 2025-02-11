import { v1 } from 'uuid'
import { Dispatch } from 'redux'
import { profileAPI } from 'api/api'

export const ADD_POST = 'ADD-POST'
export const SET_USER_PROFILE = 'SET_USER_PROFILE'
export const SET_STATUS = 'SET_STATUS'

export type ProfileResponseType = {
  aboutMe: string
  contacts: Contacts
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  userId: number
  photos: Photos
} | null
export type Contacts = {
  facebook: string
  website?: string
  vk: string
  twitter: string
  instagram: string
  youtube?: string
  github: string
  mainLink?: string
}
export type Photos = {
  small: string
  large: string
}

export type PostDataType = {
  id: string
  message: string
  likesCount: number
}

export type ProfilePageType = {
  posts: Array<PostDataType>
  profile: ProfileResponseType | null
  status: string
}

let initialState = {
  posts: [
    { id: v1(), message: 'Hi, how are you?', likesCount: 12 },
    { id: v1(), message: "It's my first post", likesCount: 11 },
    { id: v1(), message: 'Bla bla', likesCount: 9 },
    { id: v1(), message: 'Da da', likesCount: 19 },
  ],
  profile: null,
  status: '',
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { id: v1(), message: action.newPostText, likesCount: 0 }],
      }
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile }
    case SET_STATUS:
      return { ...state, status: action.status }
    default:
      return state
  }
}

export type AddPostActionType = ReturnType<typeof addPostAC>
export type SetUserProfileActionType = ReturnType<typeof setUserProfileAC>
export type SetStatusActionType = ReturnType<typeof setStatusAC>

export type ActionsTypes = AddPostActionType | SetUserProfileActionType | SetStatusActionType

export const addPostAC = (newPostText: string) => ({ type: ADD_POST, newPostText }) as const
export const setUserProfileAC = (profile: ProfileResponseType) => ({ type: SET_USER_PROFILE, profile }) as const
export const setStatusAC = (status: string) => ({ type: SET_STATUS, status }) as const

export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
  profileAPI.getProfile(userId).then((res) => {
    dispatch(setUserProfileAC(res.data))
  })
}

export const getStatus = (userId: number) => (dispatch: Dispatch) => {
  profileAPI.getStatus(userId).then((res) => {
    dispatch(setStatusAC(res.data))
  })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
  profileAPI.updateStatus(status).then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(setStatusAC(status))
    }
  })
}
