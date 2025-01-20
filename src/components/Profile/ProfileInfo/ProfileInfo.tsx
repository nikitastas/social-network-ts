import s from './ProfileInfo.module.css'
import {ProfileResponseType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";

export type ProfileInfoProps = {
    profile: ProfileResponseType
}

export const ProfileInfo = ({profile}: ProfileInfoProps) => {
    if (!profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={profile?.photos.large} alt="Profile Avatar"/>
                ava + description
            </div>
        </div>
    )
}