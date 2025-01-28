import { ActionsTypes, addPostAC, updateNewPostTextAC } from '../../../redux/profile-reducer'
import { MyPosts } from './MyPosts'
import { connect } from 'react-redux'
import { RootState } from '../../../redux/redux-store'

let mapStateToProps = (state: RootState) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}

let mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
  return {
    updateNewPostText: (text: string) => {
      dispatch(updateNewPostTextAC(text))
    },
    addPost: () => {
      dispatch(addPostAC())
    },
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
