import {ProfilePageType} from './store';

export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
        {id: 2, message: "Bla bla", likesCount: 9},
        {id: 2, message: "Da da", likesCount: 19},
    ],
    newPostText: 'it-kamasutra.com'
}

export const profileReducer = (state: ProfilePageType = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (newText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
})