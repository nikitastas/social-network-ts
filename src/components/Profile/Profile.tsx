import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileResponseType} from "../../redux/profile-reducer";

type ProfileProps = {
    setUserProfile: (profile: ProfileResponseType) => void
    profile: ProfileResponseType
}

export const Profile = ({setUserProfile, profile}: ProfileProps) => {
    return (
        <div>
            <ProfileInfo profile={profile} />
            <MyPostsContainer />
        </div>
    )
}