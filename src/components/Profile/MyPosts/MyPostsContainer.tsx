import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {StoreContext} from '../../../StoreContext';
import {useContext} from 'react';

type Props = {

}

export const MyPostsContainer = ({}: Props) => {
    let store = useContext(StoreContext)

    let state = store.getState()

    const addPost = () => {
        store.dispatch(addPostActionCreator())
    }

    const onPostChange = (text: string) => {
            store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (<MyPosts posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} updateNewPostText={onPostChange} addPost={addPost} />)
}