import {v1} from 'uuid';

export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type PostDataType = {
    id: string
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostDataType>
    newPostText: string
}

let initialState = {
    posts: [
        {id: v1(), message: "Hi, how are you?", likesCount: 12},
        {id: v1(), message: "It's my first post", likesCount: 11},
        {id: v1(), message: "Bla bla", likesCount: 9},
        {id: v1(), message: "Da da", likesCount: 19},
    ],
    newPostText: 'it-kamasutra.com'
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case ADD_POST:
            return {...state, posts: [...state.posts, {id: v1(), message: state.newPostText, likesCount: 0}], newPostText: ''}
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText}
        default:
            return state
    }
}

export type AddPostActionType = {
    type: typeof ADD_POST
}

export type UpdateNewPostTextActionType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}

export type ActionTypes = AddPostActionType | UpdateNewPostTextActionType

export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST} as const)

export const updateNewPostTextActionCreator = (newText: string): ActionTypes => (
    {
    type: UPDATE_NEW_POST_TEXT,
    newText
    } as const
)