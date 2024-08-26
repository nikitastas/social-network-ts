import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostDataType} from '../../redux/store';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';

type Props = {
    posts: Array<PostDataType>
    newPostText: string
    dispatch: (action: any) => void
}

export const Profile = ({posts, newPostText, dispatch}: Props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer posts={posts} newPostText={newPostText} dispatch={dispatch}/>
        </div>
    )
}