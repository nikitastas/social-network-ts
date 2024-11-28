import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {RootState} from '../../../redux/redux-store';
import {ActionTypes} from '../../../redux/store';


/*export const MyPostsContainer = ({}: Props) => {
    let store = useContext(StoreContext)

    let state = store.getState()

    const addPost = () => {
        store.dispatch(addPostActionCreator())
    }

    const onPostChange = (text: string) => {
            store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (<MyPosts posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} updateNewPostText={onPostChange} addPost={addPost} />)
}*/

let mapStateToProps = (state: RootState) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)