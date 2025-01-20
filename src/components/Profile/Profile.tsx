import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileResponseType} from "../../redux/profile-reducer";

type ProfileProps = {
    profile: ProfileResponseType
}

export const Profile = ({profile}: ProfileProps) => {
    return (
        <div>
            <ProfileInfo profile={profile} />
            <MyPostsContainer />
        </div>
    )
}