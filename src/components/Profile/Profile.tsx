import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostDataType} from '../../redux/state';

type Props = {
    posts: Array<PostDataType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export const Profile = ({posts, newPostText, addPost, updateNewPostText}: Props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts} newPostText={newPostText} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </div>
    )
}