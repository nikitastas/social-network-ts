import {PostDataType} from '../../../redux/store';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';

type Props = {
    posts: Array<PostDataType>
    newPostText: string
    dispatch: (action: any) => void
}

export const MyPostsContainer = ({posts, newPostText, dispatch}: Props) => {

    const addPost = () => {
        dispatch(addPostActionCreator())
    }

    const onPostChange = (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
    }

    return (<MyPosts posts={posts} newPostText={newPostText} updateNewPostText={onPostChange} addPost={addPost} />)
}