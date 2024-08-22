import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostDataType} from '../../redux/store';

type Props = {
    posts: Array<PostDataType>
    newPostText: string
    dispatch: (action: any) => void
}

export const Profile = ({posts, newPostText, dispatch}: Props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts} newPostText={newPostText} dispatch={dispatch}/>
        </div>
    )
}