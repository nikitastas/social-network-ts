import {StoreType} from '../../../redux/store';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';

type Props = {
    store: StoreType
}

export const MyPostsContainer = ({store}: Props) => {

    let state = store.getState()

    const addPost = () => {
        store.dispatch(addPostActionCreator())
    }

    const onPostChange = (text: string) => {
            store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (<MyPosts posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} updateNewPostText={onPostChange} addPost={addPost} />)
}