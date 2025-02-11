import { ProfileInfo } from './ProfileInfo/ProfileInfo'
import { MyPosts } from './MyPosts/MyPosts'
import { ProfileResponseType } from 'my-redux/profile-reducer'

type ProfileProps = {
  profile: ProfileResponseType
  status: string
}

export const Profile = ({ profile, status }: ProfileProps) => {
  return (
    <div>
      <ProfileInfo profile={profile} status={status} />
      <MyPosts />
    </div>
  )
}
