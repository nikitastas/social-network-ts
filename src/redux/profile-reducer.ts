import { v1 } from 'uuid'
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
export const SET_USER_PROFILE = 'SET_USER_PROFILE'

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
  newPostText: string
  profile: ProfileResponseType | null
}

let initialState = {
  posts: [
    { id: v1(), message: 'Hi, how are you?', likesCount: 12 },
    { id: v1(), message: "It's my first post", likesCount: 11 },
    { id: v1(), message: 'Bla bla', likesCount: 9 },
    { id: v1(), message: 'Da da', likesCount: 19 },
  ],
  newPostText: 'it-kamasutra.com',
  profile: null,
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { id: v1(), message: state.newPostText, likesCount: 0 }],
        newPostText: '',
      }
    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText }
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile }
    default:
      return state
  }
}

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
export type SetUserProfile = ReturnType<typeof setUserProfile>

export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType | SetUserProfile

export const addPostAC = () => ({ type: ADD_POST }) as const
export const updateNewPostTextAC = (newText: string) => ({ type: UPDATE_NEW_POST_TEXT, newText }) as const
export const setUserProfile = (profile: ProfileResponseType) => ({ type: SET_USER_PROFILE, profile }) as const
export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
  usersAPI.getProfile(userId).then((res) => {
    dispatch(setUserProfile(res.data))
  })
}
