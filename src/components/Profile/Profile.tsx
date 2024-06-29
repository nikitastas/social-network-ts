import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostDataType} from '../../redux/state';

type Props = {
    posts: Array<PostDataType>
    addPost: (postMessage: string) => void
}

export const Profile = ({posts, addPost}: Props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts} addPost={addPost}/>
        </div>
    )
}