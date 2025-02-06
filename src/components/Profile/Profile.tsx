import { ProfileInfo } from './ProfileInfo/ProfileInfo'
import { MyPostsContainer } from './MyPosts/MyPostsContainer'
import { ProfileResponseType } from '../../redux/profile-reducer'

type ProfileProps = {
  profile: ProfileResponseType
  status: string
}

export const Profile = ({ profile, status }: ProfileProps) => {
  return (
    <div>
      <ProfileInfo profile={profile} status={status} />
      <MyPostsContainer />
    </div>
  )
}
