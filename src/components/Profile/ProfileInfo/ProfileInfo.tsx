import s from './ProfileInfo.module.css'
import { ProfileResponseType } from 'my-redux/profile-reducer'
import { Preloader } from '../../common/Preloader/Preloader'
import { ProfileStatus } from './ProfileStatus'

export type ProfileInfoProps = {
  profile: ProfileResponseType
  status: string
}

export const ProfileInfo = ({ profile, status }: ProfileInfoProps) => {
  if (!profile) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        <img src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg" alt="" />
      </div>
      <div className={s.descriptionBlock}>
        <img src={profile?.photos.large} alt="Profile Avatar " />
        <div>{' ' + profile.fullName + ' '}</div>
        <ProfileStatus status={status} />
      </div>
    </div>
  )
}
